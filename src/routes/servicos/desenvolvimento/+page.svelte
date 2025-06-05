<!-- src/routes/servicos/desenvolvimento/+page.svelte -->
<script lang="ts">
	import LocalCTA from '$lib/components/LocalCTA.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import DevImg from '$lib/assets/images/desenvolvimento-web.png';

	export const load = () => {
		return {
			metadata: {
				title: 'Criação de Sites em Osório | SEO Integrado',
				description: 'Desenvolvimento de sites rápidos e otimizados para empresas de Osório/RS com hospedagem nacional'
			}
		};
	};
</script>

<div class="uk-container uk-margin-large-top">
	<div class="uk-text-center uk-margin-large-bottom">
		<h1 class="uk-heading-large">
			Sites <span class="text-primary">Feitos para Osório</span>
		</h1>
		<p class="uk-text-lead uk-width-3-4@m uk-margin-auto">
			Soluções web personalizadas para negócios locais, combinando performance técnica com estratégias comprovadas para a região
		</p>
	</div>

	<ServiceCard
		title="Desenvolvimento Web Local"
		image={DevImg}
		icon={null}
		features={[
			'Carregamento em <strong>menos de 2 segundos</strong> (crucial para o 4G da região)',
			'Integração perfeita com <strong>Google Meu Negócio</strong>',
			'Mapas e rotas otimizadas para clientes de Osório',
			'Formulários de contato com WhatsApp direto'
		]}
		stats={[
			{ value: '+120%', label: 'Conversão em visitas' },
			{ value: 'Top 3', label: 'No Google para sua área' }
		]}
		ctaText={null}
	/>

	<div class="uk-grid-match uk-child-width-1-3@m uk-margin-large-top uk-grid">
		<div>
			<div class="uk-card uk-card-default uk-card-body uk-text-center">
				<span class="uk-text-primary" data-uk-icon="icon: world; ratio: 2"></span>
				<h3>Sites Institucionais</h3>
				<p>Presença digital profissional para consultórios, lojas e serviços locais</p>
			</div>
		</div>
		<div>
			<div class="uk-card uk-card-default uk-card-body uk-text-center">
				<span class="uk-text-primary" data-uk-icon="icon: cart; ratio: 2"></span>
				<h3>E-commerce Regional</h3>
				<p>Lojas virtuais com entrega para Osório e cidades vizinhas</p>
			</div>
		</div>
		<div>
			<div class="uk-card uk-card-default uk-card-body uk-text-center">
				<span class="uk-text-primary" data-uk-icon="icon: refresh; ratio: 2"></span>
				<h3>Reformulação</h3>
				<p>Atualização de sites antigos para padrões modernos</p>
			</div>
		</div>
	</div>
	<div class="main-heading">
		<LocalCTA
			text="Precisa de um site que realmente traga clientes em Osório?"
			buttonText="Falar com Desenvolvedor"
		/>
	</div>
</div>