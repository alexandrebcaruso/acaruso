<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    // Chat state
    let open = false;
    let userInput = '';
    let isLoading = false;
    let showLeadConfirmation = false;
    let currentLead: any = null;

    let messages: Array<{ 
      id: string,
      role: 'user' | 'assistant' | 'system',
      content: string,
      quick_replies?: string[],
      timestamp: Date
    }> = [];

    // Initialize with welcome message
    onMount(() => {
      addBotMessage("Olá! Sou o assistente da [Sua Empresa]. Como posso ajudar seu negócio hoje?");
    });
  
    // API configuration
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';
  
    function addBotMessage(content: string, quickReplies?: string[]) {
      messages = [
        ...messages,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content,
          quick_replies: quickReplies,
          timestamp: new Date()
        }
      ];
    }
  
    function addUserMessage(content: string) {
      messages = [
        ...messages,
        {
          id: crypto.randomUUID(),
          role: 'user',
          content,
          timestamp: new Date()
        }
      ];
    }

    async function handleSend() {
      if (!userInput.trim() || isLoading) return;

      addUserMessage(userInput);
      const currentMessage = userInput;
      userInput = '';

      try {
        isLoading = true;
        
        const response = await fetch(`${API_URL}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            conversation: messages.filter(m => m.role !== 'system')
          })
        });

        const { reply, quick_replies } = await response.json();
        addBotMessage(reply, quick_replies);

      } catch (error) {
        // ... (error handling remains)
      }
    }

    // Lead saving
    async function saveLead() {
      if (!currentLead) return;
  
      try {
        const response = await fetch(`${API_URL}/api/save_lead`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentLead)
        });
  
        const result = await response.json();
        
        if (result.status === 'success') {
          addBotMessage("✅ Cadastro realizado! Nossa equipe entrará em contato em breve.");
          messages = [
            ...messages,
            {
              id: crypto.randomUUID(),
              role: 'system',
              content: JSON.stringify(currentLead),
              timestamp: new Date()
            }
          ];
        } else {
          addBotMessage(`⚠️ ${result.message || 'Erro ao salvar dados'}`);
        }
  
      } catch (error) {
        addBotMessage("⚠️ Erro ao enviar dados. Tente novamente mais tarde.");
        console.error('Save lead error:', error);
      } finally {
        showLeadConfirmation = false;
        currentLead = null;
      }
    }
  
    // UI helpers
    function scrollToBottom() {
      setTimeout(() => {
        const container = document.querySelector('.messages-container');
        if (container) container.scrollTop = container.scrollHeight;
      }, 50);
    }
  
    function formatMessageContent(content: string) {
      return content.replace(/\n/g, '<br>');
    }
  </script>
  
  <div class="fixed bottom-6 right-6 z-50">
    {#if open}
      <div 
        class="flex flex-col w-96 h-[600px] bg-white rounded-lg shadow-xl border border-gray-200"
        transition:fade
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-lg">
          <h3 class="font-bold">Assistente Virtual</h3>
          <button 
            on:click={() => open = false}
            class="p-1 rounded-full hover:bg-blue-700 transition-colors"
          >
            ✕
          </button>
        </div>
  
        <!-- Messages -->
        <div class="flex-1 overflow-y-auto p-4 messages-container">
          {#each messages.filter(m => m.role !== 'system') as message (message.id)}
            <div class={`flex mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                class={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {@html formatMessageContent(message.content)}
              </div>
            </div>
          {/each}
  
          {#if isLoading}
            <div class="flex justify-start">
              <div class="flex gap-2 p-3 bg-gray-100 rounded-lg">
                <div class="w-2 h-2 rounded-full bg-gray-500 animate-pulse"></div>
                <div class="w-2 h-2 rounded-full bg-gray-500 animate-pulse delay-150"></div>
                <div class="w-2 h-2 rounded-full bg-gray-500 animate-pulse delay-300"></div>
              </div>
            </div>
          {/if}
        </div>
  
        <!-- Input Area -->
        <div class="border-t p-4">
          {#if showLeadConfirmation}
            <div class="mb-4 p-3 bg-blue-50 rounded-lg">
              <h4 class="font-bold mb-2">Confirmar dados:</h4>
              {#if currentLead?.name}
                <p><span class="font-semibold">Nome:</span> {currentLead.name}</p>
              {/if}
              {#if currentLead?.email}
                <p><span class="font-semibold">Email:</span> {currentLead.email}</p>
              {/if}
              {#if currentLead?.phone}
                <p><span class="font-semibold">Telefone:</span> {currentLead.phone}</p>
              {/if}
            </div>
            <div class="flex gap-2">
              <button
                on:click={saveLead}
                class="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Confirmar
              </button>
              <button
                on:click={() => {
                  showLeadConfirmation = false;
                  currentLead = null;
                }}
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
              >
                Cancelar
              </button>
            </div>
          {:else}
            <textarea
              bind:value={userInput}
              on:keydown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
              class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Digite sua mensagem..."
              rows="2"
              disabled={isLoading}
            />
            <button
              on:click={handleSend}
              class="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50"
              disabled={isLoading || !userInput.trim()}
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          {/if}
        </div>
      </div>
    {:else}
      <button
        on:click={() => {
          open = true;
          scrollToBottom();
        }}
        class="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all"
        title="Abrir chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    {/if}
  </div>
  
  <style>
    .messages-container {
      scroll-behavior: smooth;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  </style>