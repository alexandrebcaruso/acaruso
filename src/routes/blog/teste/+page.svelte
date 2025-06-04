<!-- src/routes/blog/teste/+page.svelte -->
<script lang="ts">
	import LocalCTA from '$lib/components/LocalCTA.svelte';
	import { page } from '$app/state';
	$: title = page.data.title;
	$: description = page.data.metadata.description;
	export const load = async ({ params }: any) => {
		// Exemplo: Buscar conteúdo do artigo por slug (params.slug)
		const article = {
			title: 'Como Aparecer no Google em Osório',
			content: '<p>Estratégias comprovadas para negócios locais...</p>',
			metadata: {
				title: 'SEO Local em Osório: Guia Prático',
				description: 'Aprenda a otimizar seu site para buscas em Osório/RS'
			}
		};

		return {
			...article
		};
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<article class="article-content">
	<h1>{title}</h1>
	{@html page.data.content}
	<LocalCTA text="Precisa de ajuda com SEO em Osório?" buttonText="Falar com Especialista" />
</article>
