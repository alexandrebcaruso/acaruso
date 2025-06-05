<!-- src/routes/servicos/design/+page.svelte -->
<script lang="ts">
	import LocalCTA from '$lib/components/LocalCTA.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import DesignImg from '$lib/assets/images/design-grafico-osorio.png';

	export const load = () => {
		return {
			metadata: {
				title: 'Design Profissional em Osório | Identidade Visual',
				description: 'Criação de logos, sites e materiais gráficos com identidade regional para negócios de Osório/RS'
			}
		};
	};
</script>

<div class="uk-container uk-margin-large-top">
	<div class="uk-text-center uk-margin-large-bottom">
		<h1 class="uk-heading-large">
			Design com <span class="text-primary">Identidade Gaúcha</span>
		</h1>
		<p class="uk-text-lead uk-width-3-4@m uk-margin-auto">
			Soluções visuais que conectam seu negócio à cultura local
		</p>
	</div>

	<ServiceCard
		title="Identidade Visual Local"
		image={DesignImg}
		icon={null}
		features={[
			'Logotipos que refletem a essência de Osório',
			'Material gráfico para eventos regionais (Fenadoce, Festival do Camarão)',
			'Posts para redes sociais com temática local',
			'Fachadas digitais para comércios'
		]}
		stats={[
			{ value: '+80%', label: 'Reconhecimento de marca' },
			{ value: '2.5x', label: 'Mais compartilhamentos' }
		]}
		ctaText={null}
	/>

	<div class="uk-section uk-section-muted uk-margin-large-top">
		<div class="uk-container">
			<div class="uk-grid-match uk-child-width-1-3@m uk-grid">
				<div>
					<div class="uk-card uk-card-body uk-text-center">
						<span class="uk-text-primary" data-uk-icon="icon: image; ratio: 2"></span>
						<h3>Logotipos</h3>
						<p>Desde R$ 799 com 3 opções conceituais</p>
					</div>
				</div>
				<div>
					<div class="uk-card uk-card-body uk-text-center">
						<span class="uk-text-primary" data-uk-icon="icon: social; ratio: 2"></span>
						<h3>Redes Sociais</h3>
						<p>Pacotes mensais a partir de R$ 499</p>
					</div>
				</div>
				<div>
					<div class="uk-card uk-card-body uk-text-center">
						<span class="uk-text-primary" data-uk-icon="icon: print; ratio: 2"></span>
						<h3>Material Impresso</h3>
						<p>Cartões, flyers e outdoors locais</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="main-heading">
		<LocalCTA
			text="Quer um design que destaque seu negócio em Osório?"
			buttonText="Conversar com Designer"
		/>
	</div>	
</div>