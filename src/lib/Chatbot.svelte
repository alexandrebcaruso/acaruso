<!-- src/lib/Chatbot.svelte -->
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
        id: string;
        role: 'user' | 'assistant' | 'system';
        content: string;
        quick_replies?: string[];
        timestamp: Date;
    }> = [];

    // Initialize with welcome message
    onMount(() => {
        addBotMessage('Olá! Sou o assistente da [Sua Empresa]. Como posso ajudar seu negócio hoje?', [
            'Solicitar Orçamento',
            'Dúvidas Gerais',
            'Consultoria em Marketing Digital',
            'Outros'
        ]);
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

        try {
            isLoading = true;
            const response = await fetch(`${API_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    conversation: messages.filter((m) => m.role !== 'system')
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const { reply, quick_replies, lead_data } = await response.json();

            if (lead_data) {
                showLeadConfirmation = true;
                currentLead = lead_data;
            } else {
                addBotMessage(reply, quick_replies);
            }
        } catch (error) {
            addBotMessage('⚠️ Erro ao enviar dados. Tente novamente mais tarde.');
            console.error('Handle send error:', error);
        } finally {
            isLoading = false;
        }
    }

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
                addBotMessage('✅ Cadastro realizado! Nossa equipe entrará em contato em breve.');
            } else {
                addBotMessage(`⚠️ ${result.message || 'Erro ao salvar dados'}`);
            }
        } catch (error) {
            addBotMessage('⚠️ Erro ao enviar dados. Tente novamente mais tarde.');
            console.error('Save lead error:', error);
        } finally {
            showLeadConfirmation = false;
            currentLead = null;
        }
    }

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

<div class="chatbot-container">
    {#if open}
        <div class="chat-window" transition:fade>
            <!-- Header -->
            <div class="chat-header">
                <h3>Assistente Virtual</h3>
                <button on:click={() => (open = false)}>
                    ✕
                </button>
            </div>
            
            <!-- Messages -->
            <div class="messages-container">
                {#each messages.filter((m) => m.role !== 'system') as message (message.id)}
                    <div class={`message ${message.role === 'user' ? 'user-message' : 'bot-message'}`}>
                        {@html formatMessageContent(message.content)}
                    </div>
                {/each}
                {#if isLoading}
                    <div class="typing-indicator">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                {/if}
            </div>
            
            <!-- Input Area -->
            <div class="input-area">
                {#if showLeadConfirmation}
                    <div class="lead-confirmation">
                        <h4>Confirmar dados:</h4>
                        {#if currentLead?.name}
                            <p><span>Nome:</span> {currentLead.name}</p>
                        {/if}
                        {#if currentLead?.email}
                            <p><span>Email:</span> {currentLead.email}</p>
                        {/if}
                        {#if currentLead?.phone}
                            <p><span>Telefone:</span> {currentLead.phone}</p>
                        {/if}
                    </div>
                    <div class="confirmation-buttons">
                        <button on:click={saveLead}>
                            Confirmar
                        </button>
                        <button on:click={() => {
                            showLeadConfirmation = false;
                            currentLead = null;
                        }}>
                            Cancelar
                        </button>
                    </div>
                {:else}
                    <textarea
                        bind:value={userInput}
                        on:keydown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                        placeholder="Digite sua mensagem..."
                        rows="2"
                        disabled={isLoading}
                    />
                    <button
                        on:click={handleSend}
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
            class="chat-toggle"
        >
            <svg viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
        </button>
    {/if}
</div>

<style>
    .chatbot-container {
        position: fixed;
        right: 1.5rem;
        bottom: 1.5rem;
        z-index: 50;
    }

    .chat-window {
        width: 24rem;
        height: 37.5rem;
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
        border: 1px solid var(--gray-200);
        background-color: var(--white);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    .chat-header {
        background-color: var(--primary-600);
        color: var(--white);
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .chat-header h3 {
        font-weight: 700;
        margin: 0;
    }

    .chat-header button {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 50%;
        transition: background-color 0.2s;
    }

    .chat-header button:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .messages-container {
        flex: 1;
        padding: 1rem;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        scroll-behavior: smooth;
    }

    .message {
        max-width: 80%;
        padding: 0.75rem;
        border-radius: 0.75rem;
    }

    .bot-message {
        align-self: flex-start;
        background-color: var(--gray-100);
        color: var(--gray-800);
    }

    .user-message {
        align-self: flex-end;
        background-color: var(--primary-600);
        color: var(--white);
    }

    .typing-indicator {
        display: flex;
        gap: 0.5rem;
        padding: 0.75rem;
        background-color: var(--gray-100);
        border-radius: 0.75rem;
        align-self: flex-start;
    }

    .dot {
        width: 0.5rem;
        height: 0.5rem;
        background-color: var(--gray-500);
        border-radius: 50%;
        animation: pulse 1.5s infinite ease-in-out;
    }

    .dot:nth-child(2) {
        animation-delay: 0.2s;
    }

    .dot:nth-child(3) {
        animation-delay: 0.4s;
    }

    .input-area {
        border-top: 1px solid var(--gray-200);
        padding: 1rem;
    }

    .input-area textarea {
        width: 100%;
        resize: none;
        border: 1px solid var(--gray-300);
        border-radius: 0.375rem;
        padding: 0.75rem;
        margin-bottom: 0.5rem;
    }

    .input-area textarea:focus {
        outline: none;
        border-color: var(--primary-500);
        box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }

    .input-area button {
        width: 100%;
        padding: 0.5rem;
        border-radius: 0.375rem;
        border: none;
        background-color: var(--primary-600);
        color: var(--white);
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .input-area button:hover {
        background-color: var(--primary-700);
    }

    .input-area button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .lead-confirmation {
        background-color: var(--primary-50);
        padding: 0.75rem;
        border-radius: 0.375rem;
        margin-bottom: 0.75rem;
    }

    .lead-confirmation h4 {
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .lead-confirmation p {
        margin-bottom: 0.25rem;
    }

    .lead-confirmation span {
        font-weight: 600;
    }

    .confirmation-buttons {
        display: flex;
        gap: 0.5rem;
    }

    .confirmation-buttons button {
        flex: 1;
    }

    .confirmation-buttons button:last-child {
        background-color: var(--gray-300);
        color: var(--gray-800);
    }

    .confirmation-buttons button:last-child:hover {
        background-color: var(--gray-400);
    }

    .chat-toggle {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background-color: var(--primary-600);
        color: var(--white);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.2s;
    }

    .chat-toggle:hover {
        background-color: var(--primary-700);
        transform: scale(1.05);
    }

    .chat-toggle svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    @media (max-width: 480px) {
        .chat-window {
            width: 100vw;
            height: 100vh;
            border-radius: 0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        
        .chatbot-container {
            right: 1rem;
            bottom: 1rem;
        }
    }
</style>