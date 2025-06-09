<!-- src/routes/servicos/+page.svelte -->
<script lang="ts">
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import LocalCTA from '$lib/components/LocalCTA.svelte';

	import MarketingImg from '$lib/assets/images/marketing-digital-osorio.jpg';
	import DesignImg from '$lib/assets/images/design-grafico-osorio.png';
	import DevImg from '$lib/assets/images/desenvolvimento-web.png';

</script>

<div class="uk-container uk-margin-large-top">
	<!-- Hero Section -->
	<div class="uk-text-center uk-margin-large-bottom">
		<h1 class="uk-heading-large">
			Serviços <span class="text-primary">Feitos para Osório</span>
		</h1>
		<p class="uk-text-lead uk-width-3-4@m uk-margin-auto">
			Soluções digitais personalizadas para empresas da região, combinando expertise técnica com
			conhecimento profundo do mercado gaúcho.
		</p>
	</div>

	<!-- Services Grid -->
	<div class="uk-grid-large uk-child-width-1-1 uk-margin-large-top uk-grid">
		<!-- Marketing Digital -->
		<ServiceCard
			title="Marketing Digital para Osório"
			icon={null}
			image={MarketingImg}
			features={[
				'Gestão de anúncios no <strong>Google Meu Negócio</strong>', 
				'Campanhas no <strong>Facebook/Instagram</strong> para público gaúcho',
				"SEO local (apareça quando buscarem 'serviços em Osório')",
				'Criação de conteúdo regionalizado'
			]}
			stats={[
				{ value: '+150%', label: 'Visitas a lojas físicas' },
				{ value: '3x', label: 'Mais leads qualificados' }
			]}
			ctas={[
				{ text: "Quer mais clientes locais?", href: "/contato", variant: 'primary' },
				{ text: "Saiba mais", href: "/servicos/marketing-digital", variant: 'secondary' }
			]}
		/>

		<!-- Design Gráfico -->
		<ServiceCard
			title="Design com Identidade Gaúcha"
			icon={null}
			image={DesignImg}
			features={[
				'Logotipos que refletem a cultura de Osório',
				'Material impresso para eventos locais (Festival do Camarão, etc)',
				'Posts para redes sociais com temática regional',
				'Design de fachadas para comércios locais'
			]}
			stats={[
				{ value: '+80%', label: 'Reconhecimento de marca' },
				{ value: '2.5x', label: 'Mais compartilhamentos' }
			]}
			ctas={[
				{ text: "Precisa de um design autêntico?", href: "/contato", variant: 'primary' },
				{ text: "Saiba mais", href: "/servicos/design", variant: 'secondary' }
			]}
		/>

		<!-- Desenvolvimento Web -->
		<ServiceCard
			title="Sites Rápidos e Otimizados"
			icon={null}
			image={DevImg}
			features={[
				'Sites com carregamento em <strong>menos de 2s</strong>',
				'Integração com Google Maps (rotas para seu endereço)',
				'Galeria de fotos dos seus produtos/serviços',
				'Formulários de orçamento online'
			]}
			stats={[
				{ value: '+120%', label: 'Conversão em vendas' },
				{ value: 'Top 3', label: 'No Google para sua região' }
			]}
			ctas={[
				{ text: "Sua empresa não aparece no Google?", href: "/contato", variant: 'primary' },
				{ text: "Saiba mais", href: "/servicos/desenvolvimento", variant: 'secondary' }
			]}
		/>
	</div>

	<!-- Pricing Section -->
	<div class="uk-section uk-margin-large-top">
		<div class="uk-container">
			<h2 class="uk-heading-medium uk-text-center">
				Planos <span class="text-primary">Acessíveis para Empresas Locais</span>
			</h2>

			<div class="uk-grid-match uk-child-width-1-3@m uk-margin-top uk-grid">
				<!-- Basic Plan -->
				<div>
					<div class="uk-card uk-card-default uk-card-body uk-text-center">
						<h3 class="uk-card-title">Inicial</h3>
						<div class="uk-text-large uk-margin">R$ 499<span class="uk-text-small">/mês</span></div>
						<ul class="uk-list uk-list-divider">
							<li>Gestão de 1 rede social</li>
							<li>4 posts/mês</li>
							<li>Relatório mensal</li>
							<li class="uk-text-muted">Suporte por e-mail</li>
						</ul>
						<button class="uk-button uk-button-primary uk-margin-top">Começar Agora</button>
					</div>
				</div>

				<!-- Intermediate Plan -->
				<div>
					<div class="uk-card uk-card-primary uk-card-body uk-text-center">
						<h3 class="uk-card-title">Intermediário</h3>
						<div class="uk-text-large uk-margin">R$ 899<span class="uk-text-small">/mês</span></div>
						<ul class="uk-list uk-list-divider">
							<li>Gestão de 3 redes sociais</li>
							<li>8 posts/mês</li>
							<li>Campanhas de anúncios</li>
							<li>Suporte por WhatsApp</li>
						</ul>
						<button class="uk-button uk-button-default uk-button-white uk-margin-top"
							>Mais Vendido</button
						>
					</div>
				</div>

				<!-- Complete Plan -->
				<div>
					<div class="uk-card uk-card-default uk-card-body uk-text-center">
						<h3 class="uk-card-title">Completo</h3>
						<div class="uk-text-large uk-margin">
							R$ 1.499<span class="uk-text-small">/mês</span>
						</div>
						<ul class="uk-list uk-list-divider">
							<li>Site + redes sociais</li>
							<li>12 posts/mês</li>
							<li>Gestão de anúncios</li>
							<li>Suporte 24/7</li>
						</ul>
						<button class="uk-button uk-button-primary uk-margin-top">Fazer Orçamento</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Diferenciais -->
	<div class="uk-section uk-section-secondary">
		<div class="uk-container">
			<h2 class="uk-heading-medium uk-text-center uk-light">
				Porque Escolher <span class="text-primary">A. Caruso</span>
			</h2>

			<div class="uk-grid-match uk-child-width-1-3@m uk-margin-top uk-grid">
				<div>
					<div class="uk-card uk-card-body uk-text-center">
						<div class="uk-text-primary" style="font-size: 3rem;">📍</div>
						<h3>Feito para Osório</h3>
						<p>Estratégias comprovadas para negócios da nossa região</p>
					</div>
				</div>

				<div>
					<div class="uk-card uk-card-body uk-text-center">
						<div class="uk-text-primary" style="font-size: 3rem;">⏱️</div>
						<h3>Resultados Rápidos</h3>
						<p>Primeiros impactos em menos de 30 dias</p>
					</div>
				</div>

				<div>
					<div class="uk-card uk-card-body uk-text-center">
						<div class="uk-text-primary" style="font-size: 3rem;">💬</div>
						<h3>Atendimento Local</h3>
						<p>Reuniões presenciais quando precisar</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="main-heading">
	<LocalCTA
		text="Pronto para transformar seu negócio digital em Osório?"
		buttonText="Falar com Especialista"
	/>
</div>

<style>
	.uk-button-white {
		background: white;
		color: var(--primary-600);
		border: 1px solid var(--primary-600);
	}

	.uk-button-white:hover {
		background: var(--gray-100);
		color: var(--primary-700);
	}

	.uk-section-secondary .text-primary {
		color: var(--primary-500) !important;
	}
</style>
