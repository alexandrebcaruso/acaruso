<!-- src/routes/servicos/marketing-digital/+page.svelte -->
<script lang="ts">
	import LocalCTA from '$lib/components/LocalCTA.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import MarketingImg from '$lib/assets/images/marketing-digital-osorio.jpg';

	export const load = () => {
		return {
			metadata: {
				title: 'Marketing Digital em Osório | Aumente Suas Vendas',
				description: 'Gestão de anúncios locais, SEO e redes sociais para empresas de Osório/RS'
			}
		};
	};
</script>

<div class="uk-container uk-margin-large-top">
	<div class="uk-text-center uk-margin-large-bottom">
		<h1 class="uk-heading-large">
			Clientes <span class="text-primary">Buscando Seu Negócio</span>
		</h1>
		<p class="uk-text-lead uk-width-3-4@m uk-margin-auto">
			Estratégias digitais que funcionam para o público de Osório e região
		</p>
	</div>

	<ServiceCard
		title="Visibilidade Local"
		icon={null}
		image={MarketingImg}
		features={[
			'Apareça quando pesquisarem "<strong>seu serviço em Osório</strong>"',
			'Gestão completa do <strong>Google Meu Negócio</strong>',
			'Anúncios no Facebook/Instagram para raio de 15km',
			'Relatórios mensais com dados regionais'
		]}
		stats={[
			{ value: '+150%', label: 'Visitas à loja' },
			{ value: '3x', label: 'Mais ligações' }
		]}
		ctaText={null}
	/>

	<div class="uk-grid-match uk-child-width-1-2@m uk-margin-large-top uk-grid">
		<div>
			<h2 class="uk-heading-medium">Nossas <span class="text-primary">Estratégias</span></h2>
			<ul class="uk-list uk-list-bullet">
				<li><strong>SEO Local</strong> - Apareça nas buscas por serviços na região</li>
				<li><strong>Anúncios Geodirecionados</strong> - Somente para público em Osório e cidades vizinhas</li>
				<li><strong>Conteúdo Regionalizado</strong> - Posts sobre eventos e particularidades locais</li>
			</ul>
		</div>
		<div>
			<h2 class="uk-heading-medium">Setores <span class="text-primary">Atendidos</span></h2>
			<ul class="uk-list uk-list-bullet">
				<li>Comércio local (Lojas, mercados, farmácias)</li>
				<li>Serviços (Mecânicos, consultórios, advogados)</li>
				<li>Turismo (Pousadas, restaurantes, passeios)</li>
				<li>Eventos (Casamentos, festas regionais)</li>
			</ul>
		</div>
	</div>

	<div class="main-heading">
		<LocalCTA
			text="Quer mais clientes encontrando seu negócio online?"
			buttonText="Falar com Especialista"
		/>
	</div>
</div>