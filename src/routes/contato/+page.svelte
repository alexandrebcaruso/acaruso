<!-- src/routes/contato/+page.svelte -->
<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import OsorioMap from '$lib/components/OsorioMap.svelte';
	import { contacts } from '$lib/constants/contacts';

	export const load = () => {
		return {
			metadata: {
				title: "Contato | A. Caruso - Agência em Osório",
				description: "Fale com nossa equipe em Osório/RS para soluções digitais"
			}
		};
	};
</script>

<h1>Atendemos <span>Osório</span> e Região</h1>
<div class="grid">
	<ContactForm />
	<div>
		<h2>Onde Estamos</h2>
		<OsorioMap />
		<address>{contacts.address}</address>
	</div>
</div>

<style>
	.grid {
		display: grid;
		gap: 2rem;
		grid-template-columns: 1fr 1fr;
	}
</style>