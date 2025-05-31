<!-- src/routes/contato/+page.svelte -->
<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import OsorioMap from '$lib/components/OsorioMap.svelte';
	import { contacts } from '$lib/constants/contacts';
	import { onMount } from 'svelte';
	import UIkit from 'uikit';
	import Icons from 'uikit/dist/js/uikit-icons';
	
	export const load = () => {
		return {
			metadata: {
				title: 'Contato | A. Caruso - Agência em Osório',
				description: 'Fale com nossa equipe em Osório/RS para soluções digitais'
			}
		};
	};
	
	onMount(() => {
		UIkit.use(Icons);
	});
</script>

<div class="uk-container">
	<h1>Atendemos <span>Osório</span> e Região</h1>

	<div class="uk-grid uk-grid-large uk-child-width-1-2@m">
		<div>
			<ContactForm />
		</div>
		<div>
			<div class="uk-card uk-card-default p-6">
				<h2 class="uk-card-title">Onde Estamos</h2>
				<OsorioMap />
				<address class="mt-4">
					<span class="uk-icon" data-uk-icon="icon: location"></span> {contacts.address}
				</address>
			</div>
		</div>
	</div>
</div>
