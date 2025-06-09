<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { toast } from '@zerodevx/svelte-toast';

	// Define message type
	type MessageRole = 'user' | 'assistant' | 'system';
	interface ChatMessage {
		id: string;
		role: MessageRole;
		content: string;
		quick_replies?: string[];
		timestamp: Date;
	}

	// Chat state
	let open = false;
	let userInput = '';
	let isLoading = false;
	let showLeadForm = false;
	let currentLead: any = null;
	let messages: ChatMessage[] = [];
	let conversationId: string | null = null;
	
	// API configuration
	const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

	// Initialize with welcome message
	onMount(() => {
		resetToInitialState();
	});

	// Message functions
	function addBotMessage(content: string, quickReplies?: string[]) {
		const newMessage: ChatMessage = {
			id: crypto.randomUUID(),
			role: 'assistant',
			content,
			quick_replies: quickReplies,
			timestamp: new Date()
		};
		messages = [...messages, newMessage];
		scrollToBottom();
	}

	function addUserMessage(content: string) {
		const newMessage: ChatMessage = {
			id: crypto.randomUUID(),
			role: 'user',
			content,
			timestamp: new Date()
		};
		messages = [...messages, newMessage];
		scrollToBottom();
	}

	// Handle user input
	async function handleSend() {
		if (!userInput.trim()) return;
		
		addUserMessage(userInput);
		const message = userInput;
		userInput = '';
		isLoading = true;
		
		try {
			// Send message to backend API
			const response = await fetch(`${API_URL}/chat`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					conversation_id: conversationId,
					message
				})
			});
			
			if (!response.ok) throw new Error('Failed to get response from chatbot');
			
			const result = await response.json();
			
			// Update conversation ID if new one was created
			if (result.conversation_id) {
				conversationId = result.conversation_id;
			}
			
			// Add bot response to messages
			addBotMessage(result.reply, result.quick_replies);
			
			// Handle form display if needed
			if (result.show_lead_form) {
				handleShowLeadForm(result.lead_form_service || 'Serviço');
			}
		} catch (error) {
			console.error('Chat error:', error);
			addBotMessage('Desculpe, estou tendo problemas técnicos. Por favor, tente novamente mais tarde.');
		} finally {
			isLoading = false;
		}
	}
	
	function resetToInitialState() {
		// Clear conversation ID to start fresh
		conversationId = null;
		
		// Clear messages and add initial greeting
		messages = [];
		addBotMessage('Como posso ajudar seu negócio hoje?', [
			'Solicitar Orçamento',
			'Dúvidas Gerais',
			'Consultoria em Marketing Digital',
			'Outros Serviços'
		]);
	}
	
	function handleShowLeadForm(service: string) {
		showLeadForm = true;
		currentLead = {
			name: '',
			email: '',
			phone: '',
			service: service,
			message: `Interesse em ${service}`
		};
	}
	
	async function saveLead() {
		if (!currentLead) return;
		
		try {
			const response = await fetch(`${API_URL}/contact`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...currentLead,
					region: 'Osório/RS',
					source: 'chatbot'
				})
			});
			
			const result = await response.json();
			
			if (result.status === 'success') {
				toast.push('Dados enviados com sucesso! Entraremos em contato em breve.', {
					theme: { '--toastBackground': '#4CAF50', '--toastColor': 'white' }
				});
				addBotMessage('Obrigado! Seus dados foram enviados. Entraremos em contato em breve.');
			} else {
				throw new Error(result.message || 'Erro no envio');
			}
		} catch (error) {
			console.error('Save lead error:', error);
			toast.push('Erro ao enviar dados. Tente novamente ou nos chame no WhatsApp.', {
				theme: { '--toastBackground': '#F44336', '--toastColor': 'white' }
			});
		} finally {
			showLeadForm = false;
			currentLead = null;
			resetToInitialState();
		}
	}
	
	function scrollToBottom() {
		setTimeout(() => {
			const container = document.querySelector('.uk-card-body');
			if (container) container.scrollTop = container.scrollHeight;
		}, 100);
	}
	
	function formatMessageContent(content: string) {
		// Convert newlines to <br> and escape HTML
		return content
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;')
			.replace(/\n/g, '<br>');
	}
</script>

<div class="chatbot-container uk-position-fixed uk-position-bottom-right uk-position-medium">
	{#if open}
		<div class="uk-card uk-card-default uk-card-small" transition:fade style="width: 380px; height: 500px; display: flex; flex-direction: column;">
			<!-- Header -->
			<div class="uk-card-header uk-background-primary uk-light">
				<div class="uk-grid-small uk-flex-middle uk-grid">
					<div class="uk-width-auto">
						<div class="uk-border-circle uk-flex uk-flex-center uk-flex-middle" style="width: 36px; height: 36px;">
							<span data-uk-icon="icon: commenting; ratio: 0.8"></span>
						</div>
					</div>
					<div class="uk-width-expand">
						<h3 class="uk-card-title uk-margin-remove-bottom">Assistente Virtual</h3>
						<p class="uk-text-meta uk-margin-remove-top">Online agora</p>
					</div>
					<div class="uk-width-auto">
						<button 
							aria-label="Fechar chat"
							class="uk-icon-link uk-light" 
							data-uk-icon="close" 
							on:click|preventDefault={() => (open = false)}
						></button>
					</div>
				</div>
			</div>

			<!-- Messages -->
			<div class="uk-card-body uk-padding-small" style="flex: 1; overflow-y: auto;">
				<div class="uk-grid-small uk-flex-column uk-grid" style="gap: 12px;">
					{#each messages.filter((m) => m.role !== 'system') as message (message.id)}
						<div class={`uk-width-1-1 ${message.role === 'user' ? 'uk-flex-right' : 'uk-flex-left'}`}>
							<div class={`uk-padding-small uk-border-rounded ${message.role === 'user' ? 'uk-background-primary uk-light' : 'uk-background-muted'}`} style="max-width: 85%;">
								{@html formatMessageContent(message.content)}
								
								<!-- Quick replies -->
								{#if message.quick_replies && message.role === 'assistant'}
									<div class="uk-margin-top uk-flex uk-flex-wrap" style="gap: 6px;">
										{#each message.quick_replies as reply}
											<button 
												class="uk-button uk-button-small uk-button-default uk-text-small" 
												on:click={() => {
													userInput = reply;
													handleSend();
												}}
												style="padding: 0 8px;"
											>
												{reply}
											</button>
										{/each}
									</div>
								{/if}
							</div>
						</div>
					{/each}
					
					{#if isLoading}
						<div class="uk-flex uk-flex-left">
							<div class="uk-padding-small uk-background-muted uk-border-rounded">
								<div class="uk-flex" style="gap: 4px;">
									<div class="uk-border-circle" style="width: 8px; height: 8px; background: var(--primary-500); animation: pulse 1.5s infinite;"></div>
									<div class="uk-border-circle" style="width: 8px; height: 8px; background: var(--primary-500); animation: pulse 1.5s infinite 0.2s;"></div>
									<div class="uk-border-circle" style="width: 8px; height: 8px; background: var(--primary-500); animation: pulse 1.5s infinite 0.4s;"></div>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>

			<!-- Input Area -->
			<div class="uk-card-footer uk-padding-small">
				{#if showLeadForm}
					<div class="lead-form">
						<div class="uk-margin-small">
							<input 
								class="uk-input" 
								bind:value={currentLead.name} 
								placeholder="Nome completo" 
								required
							/>
						</div>
						<div class="uk-grid-small uk-child-width-1-2@s uk-grid">
							<div>
								<input 
									class="uk-input" 
									type="email" 
									bind:value={currentLead.email} 
									placeholder="Email" 
									required
								/>
							</div>
							<div>
								<input 
									class="uk-input" 
									type="tel" 
									bind:value={currentLead.phone} 
									placeholder="Telefone/WhatsApp"
								/>
							</div>
						</div>
						<div class="uk-margin-small">
							<textarea 
								class="uk-textarea" 
								bind:value={currentLead.message} 
								rows={2} 
								placeholder="Mensagem adicional"
							></textarea>
						</div>
						<div class="uk-grid-small uk-child-width-1-2 uk-grid">
							<div>
								<button 
									class="uk-button uk-button-primary uk-width-1-1" 
									on:click={saveLead}
								>
									Enviar
								</button>
							</div>
							<div>
								<button 
									class="uk-button uk-button-default uk-width-1-1"
									on:click={() => {
										showLeadForm = false;
										currentLead = null;
										resetToInitialState();
									}}
								>
									Cancelar
								</button>
							</div>
						</div>
					</div>
				{:else}
					<form on:submit|preventDefault={handleSend}>
						<div class="uk-width-1-1">
							<textarea
								class="uk-textarea uk-border-rounded"
								bind:value={userInput}
								placeholder="Digite sua mensagem..."
								rows="1"
								disabled={isLoading}
								style="padding-right: 50px; resize: none;"
							></textarea>
							<button 
								aria-label="Enviar mensagem"
								class="chatbot-send-button uk-button uk-button-primary uk-border-circle" 
								disabled={isLoading || !userInput.trim()}
							>
								<span data-uk-icon="icon: arrow-right;"></span>
							</button>
						</div>
					</form>
				{/if}
			</div>
		</div>
	{:else}
		<button
			on:click={() => {
				open = true;
				scrollToBottom();
			}}
			class="chat-toggle uk-button uk-button-primary uk-border-circle"
			aria-label="Abrir chat de atendimento"
		>
			<span data-uk-icon="icon: commenting; ratio: 1"></span>
		</button>
	{/if}
</div>

<style>
	.lead-form {
		background: white;
		padding: 15px;
		border-radius: 5px;
		border: 1px solid #e5e5e5;
	}
	
	.chat-toggle {
		width: 60px; 
		height: 60px; 
		box-shadow: 0 5px 15px rgba(0,0,0,0.2); 
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.chatbot-container {
		z-index: 980;
		margin: 20px;
		box-shadow: 0 5px 15px rgba(0,0,0,0.2); 
	}
	
	.uk-card:hover {
		transform: unset;
	}

	.uk-button-primary:hover {
		transform: unset;
	}

	.uk-card-body,
	.uk-card-footer {
		background-color: var(--gray-100) !important;
	}

	.uk-card-footer form div{
		display: flex;
	}

	.chatbot-send-button {
		padding: 10px; 
		display: flex; 
		align-items: center; 
		justify-content: center;
		margin-left: 0.5rem;
	}

	/* Fix for UIkit icons */
	.uk-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	/* Animation for typing indicator */
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(0.9);
		}
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.chatbot-container {
			margin: 10px;
		}
		
		.uk-card {
			width: 100vw !important;
			height: 100vh !important;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			border-radius: 0;
		}

		.chat-toggle {
			bottom: 20px;
			right: 20px;
		}
		
		.lead-form .uk-grid-small.uk-child-width-1-2\@s.uk-grid > div {
			width: 100%;
		}
	}
</style>