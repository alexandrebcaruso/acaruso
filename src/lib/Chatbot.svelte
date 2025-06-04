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
		addBotMessage('Olá! Sou o assistente da Agência Caruso. Como posso ajudar seu negócio hoje?', [
			'Solicitar Orçamento',
			'Dúvidas Gerais',
			'Consultoria em Marketing Digital',
			'Outros'
		]);
	});

	// API configuration
	const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';

	// Message functions
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

	// Handle functions
	async function handleSend() { }
	async function saveLead() { }
	function scrollToBottom() { }
	function formatMessageContent(content: string) { }
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
						<a aria-label=" " class="uk-icon-link uk-light" href="#" data-uk-icon="close" on:click|preventDefault={() => (open = false)}></a>
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
				{#if showLeadConfirmation}
					<div class="uk-card uk-card-default uk-card-small uk-margin-bottom">
						<div class="uk-card-body uk-padding-small">
							<h4 class="uk-card-title uk-margin-remove">Confirmar dados</h4>
							{#if currentLead?.name}
								<p class="uk-margin-small"><span class="uk-text-bold">Nome:</span> {currentLead.name}</p>
							{/if}
							{#if currentLead?.email}
								<p class="uk-margin-small"><span class="uk-text-bold">Email:</span> {currentLead.email}</p>
							{/if}
							{#if currentLead?.phone}
								<p class="uk-margin-small"><span class="uk-text-bold">Telefone:</span> {currentLead.phone}</p>
							{/if}
						</div>
						<div class="uk-card-footer uk-padding-remove-top uk-grid-small uk-child-width-1-2 uk-grid">
							<div>
								<button 
									class="uk-button uk-button-primary uk-button-small uk-width-1-1" 
									on:click={saveLead}
								>
									Confirmar
								</button>
							</div>
							<div>
								<button 
									class="uk-button uk-button-default uk-button-small uk-width-1-1"
									on:click={() => {
										showLeadConfirmation = false;
										currentLead = null;
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
	}
</style>