<!-- src/routes/sobre/+page.svelte -->
<script lang="ts">
	import LocalCTA from '$lib/components/LocalCTA.svelte';

	export const load = () => {
		return {
			metadata: {
				title: 'Sobre a A. Caruso | Agência Digital em Osório',
				description: 'Conheça nossa equipe especializada em soluções digitais para Osório/RS'
			}
		};
	};
</script>

<div class="uk-container uk-margin-large-top">
	<!-- Hero Section -->
	<div class="uk-text-center uk-margin-large-bottom">
		<h1 class="uk-heading-large">
			Agência <span class="text-primary">A. Caruso</span>
		</h1>
		<p class="uk-text-lead uk-width-2-3@m uk-margin-auto">
			Soluções digitais completas para negócios de Osório
		</p>
	</div>

	<!-- Founder Section -->
	<div class="uk-section uk-section-default">
		<div class="uk-container uk-container-small">
			<div class="uk-text-center">
				<div class="uk-inline-clip uk-margin-bottom">
					<img 
						src="https://media.licdn.com/dms/image/v2/C4E03AQFAmtXZgb_iFw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1590799064760?e=1754524800&v=beta&t=J5wuNDKknTdFBM7HLrqwdOlbpGNx_uR2wD5tK6yFE1E" 
						alt="Alexandre Caruso" 
						class="uk-border-circle" 
						width="150" 
						height="150"
					>
				</div>
				<h2>Alexandre B. Caruso</h2>
				<p class="uk-text-meta">Fundador & Especialista em Estratégias Digitais</p>
				
				<div class="uk-grid-small uk-child-width-1-3@m uk-margin-medium-top" uk-grid>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<h3 class="uk-card-title">Web</h3>
							<p>Sites rápidos e otimizados para busca</p>
						</div>
					</div>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<h3 class="uk-card-title">Marketing</h3>
							<p>Anúncios locais no Google e Instagram</p>
						</div>
					</div>
					<div>
						<div class="uk-card uk-card-default uk-card-body">
							<h3 class="uk-card-title">Design</h3>
							<p>Identidade visual para negócios locais</p>
						</div>
					</div>
				</div>
				
				<p class="uk-margin-medium-top">
					Publicitário formado pela PUCRS com 10+ anos criando soluções digitais para empresas. 
					Ajudo negócios de Osório a se destacarem online com estratégias práticas e acessíveis.
				</p>
				
				<a 
					href="https://www.linkedin.com/in/alexandrebcaruso" 
					target="_blank" 
					class="uk-button uk-button-text uk-text-primary uk-margin-top"
				>
					Ver experiência completa no LinkedIn →
				</a>
			</div>
		</div>
	</div>

	<!-- Services Focus -->
	<div class="uk-section uk-section-muted">
		<div class="uk-container">
			<h2 class="uk-heading-medium uk-text-center uk-margin-bottom">
				O que <span class="text-primary">oferecemos</span>
			</h2>
			
			<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
				<div>
					<div class="uk-card uk-card-default uk-card-body uk-text-center">
						<div class="uk-text-primary" uk-icon="icon: world; ratio: 2"></div>
						<h3 class="uk-card-title">Sites Profissionais</h3>
						<ul class="uk-list uk-list-divider uk-text-left">
							<li>Carregamento em menos de 2 segundos</li>
							<li>Otimizado para buscas locais</li>
							<li>Integração com WhatsApp e Maps</li>
						</ul>
					</div>
				</div>
				
				<div>
					<div class="uk-card uk-card-default uk-card-body uk-text-center">
						<div class="uk-text-primary" uk-icon="icon: social; ratio: 2"></div>
						<h3 class="uk-card-title">Marketing Digital</h3>
						<ul class="uk-list uk-list-divider uk-text-left">
							<li>Gestão de Google Meu Negócio</li>
							<li>Anúncios no Facebook/Instagram</li>
							<li>Conteúdo para público gaúcho</li>
						</ul>
					</div>
				</div>
				
				<div>
					<div class="uk-card uk-card-default uk-card-body uk-text-center">
						<div class="uk-text-primary" uk-icon="icon: paint-bucket; ratio: 2"></div>
						<h3 class="uk-card-title">Identidade Visual</h3>
						<ul class="uk-list uk-list-divider uk-text-left">
							<li>Logotipos com identidade regional</li>
							<li>Materiais para eventos locais</li>
							<li>Posts para redes sociais</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Local Approach -->
	<div class="uk-section uk-section-secondary uk-light">
		<div class="uk-container uk-container-small uk-text-center">
			<h2 class="uk-heading-medium">
				Feito para <span class="text-primary">Osório</span>
			</h2>
			<p>
				Entendemos os desafios específicos de negócios na região:
			</p>
			
			<div class="uk-grid-small uk-child-width-1-3@m uk-margin-medium-top" uk-grid>
				<div>
					<div class="uk-card uk-card-body">
						<span class="uk-text-primary" uk-icon="icon: credit-card; ratio: 1.5"></span>
						<h3 class="uk-margin-small-top">Orçamento</h3>
						<p>Planos a partir de R$499/mês</p>
					</div>
				</div>
				<div>
					<div class="uk-card uk-card-body">
						<span class="uk-text-primary" uk-icon="icon: comments; ratio: 1.5"></span>
						<h3 class="uk-margin-small-top">Atendimento</h3>
						<p>Suporte em português claro</p>
					</div>
				</div>
				<div>
					<div class="uk-card uk-card-body">
						<span class="uk-text-primary" uk-icon="icon: location; ratio: 1.5"></span>
						<h3 class="uk-margin-small-top">Presencial</h3>
						<p>Reuniões na sua empresa</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="main-heading">
	<LocalCTA
		text="Precisa de um site, anúncios ou identidade visual para seu negócio em Osório?"
		buttonText="Conversar com Especialista"
	/>	
</div>

<style>
	.main-heading {
		height: 40vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>