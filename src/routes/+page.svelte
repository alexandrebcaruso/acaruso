<!-- src/routes/+page.svelte -->
<script lang="ts">
	import LocalCTA from '$lib/components/LocalCTA.svelte';
	import BannerImage from '$lib/assets/homepage-banner.jpeg';

	export const load = () => {
		return {
			metadata: {
				title: 'Agência Digital em Osório | A. Caruso',
				description: 'Marketing, Design e Desenvolvimento Web para empresas de Osório/RS'
			}
		};
	};
</script>

<svelte:head>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			"name": "A. Caruso",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Osório",
				"addressRegion": "RS"
			}
		}
	</script>
</svelte:head>

<style>
	.banner-image {
		width: 100%;
		height: auto;
		object-fit: cover;
		display: block;
	}
</style>

<div class="uk-section uk-section-large uk-light">
	<img src={BannerImage} alt="Homepage Banner" class="banner-image" />
	<div class="uk-container uk-text-center">

		<h1 class="uk-heading-large uk-margin-remove-top">
			Soluções Digitais <span class="text-primary">para Osório</span>
		</h1>
		<LocalCTA text="Quer aumentar suas vendas online?" buttonText="Fale com Especialista" />
	</div>
</div>
