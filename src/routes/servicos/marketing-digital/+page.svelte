<!-- src/routes/servicos/marketing-digital/+page.svelte -->
<script lang="ts">
	import LocalCTA from '$lib/components/LocalCTA.svelte';

	export const load = () => {
		return {
			metadata: {
				title: 'Marketing Digital em Osório | Aumente Suas Vendas',
				description: 'SEO, Google Ads e redes sociais para empresas de Osório/RS'
			}
		};
	};
</script>

<div class="uk-container">
	<h1>Marketing Digital para Empresas em <span>Osório</span></h1>
	<p>Estratégias comprovadas para negócios locais:</p>
	<ul>
		<li>SEO para aparecer no Google quando buscam "serviços em Osório"</li>
		<li>Gestão de anúncios no Google Maps</li>
	</ul>
	<LocalCTA
		text="Quer um diagnóstico gratuito para seu negócio?"
		buttonText="Agendar Consultoria"
	/>
</div>
