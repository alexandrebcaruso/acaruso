<!-- src/routes/contato/+page.svelte -->
<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
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

<div class="uk-container uk-margin-large-top">
	<!-- Hero Section -->
	<div class="uk-text-center uk-margin-large-bottom">
		<h1 class="uk-heading-large">
			Fale <span class="text-primary">Conosco</span>
		</h1>
		<p class="uk-text-lead uk-width-2-3@m uk-margin-auto">
			Tire suas dúvidas sobre sites, marketing digital ou design para seu negócio em Osório
		</p>
	</div>

	<div class="uk-margin-large-top">
		<!-- Contact Form -->
		<div class="uk-card uk-card-default uk-card-body">
			<ContactForm />
		</div>
		
		<!-- Contact Info -->
		<div class="uk-grid-small uk-child-width-1-2@m uk-grid">
			<div>
				<div class="uk-card uk-card-default uk-card-body">
					<h3 class="uk-card-title">Atendimento</h3>
					<ul class="uk-list uk-list-divider">
						<li>
							<span class="uk-margin-small-right" data-uk-icon="icon: receiver"></span>
							<a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
						</li>
						<li>
							<span class="uk-margin-small-right" data-uk-icon="icon: mail"></span>
							<a href={`mailto:${contacts.email}`}>{contacts.email}</a>
						</li>
						<li>
							<span class="uk-margin-small-right" data-uk-icon="icon: clock"></span>
							Seg-Sex: 9h-18h
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div class="uk-card uk-card-default uk-card-body">
					<h3 class="uk-card-title">Área de Atuação</h3>
					<ul class="uk-list uk-list-divider">
						<li>
							<span class="uk-margin-small-right" data-uk-icon="icon: location"></span>
							Osório e região
						</li>
						<li>
							<span class="uk-margin-small-right" data-uk-icon="icon: world"></span>
							Atendimento remoto em todo Brasil
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>