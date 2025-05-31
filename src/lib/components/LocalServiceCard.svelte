<!-- src/lib/components/LocalServiceCard.svelte -->
<script lang="ts">
	export let service: {
		title: string;
		description: string;
		icon: string;
		href: string;
	};
</script>

<div
	class="uk-card uk-card-default uk-card-hover p-6 border border-gray-200 rounded-xl hover:border-primary-500 transition-all"
>
	<div class="text-4xl mb-4">{service.icon}</div>
	<h3 class="uk-card-title">{service.title}</h3>
	<p>{service.description}</p>
	<div class="mt-6">
		<a href={service.href} class="uk-button uk-button-text text-primary-600"> Saiba mais → </a>
	</div>
</div>

