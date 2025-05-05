<!-- src/routes/+page.svelte -->
<script lang="ts">
	import LocalCTA from '$lib/components/LocalCTA.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { services } from '$lib/constants/services';
	import TriadLogo from '$lib/components/TriadLogo.svelte';

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
<div class="uk-section uk-section-large uk-background-primary uk-light">
	<div class="uk-container uk-text-center">
		<TriadLogo containerSize={500} logoScale={0.8} className="uk-margin-auto" />
		<h1 class="uk-heading-large uk-margin-remove-top">
			Soluções Digitais <span class="text-primary">para Osório</span>
		</h1>
		<LocalCTA text="Quer aumentar suas vendas online?" buttonText="Fale com Especialista" />
	</div>
</div>
