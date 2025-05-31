<!-- src/routes/metodo/+page.svelte-->
<script lang="ts">
	import LambdaPillars from '$lib/components/LambdaPillars.svelte';
	import LocalCTA from '$lib/components/LocalCTA.svelte';

	export const load = () => {
		return {
			metadata: {
				title: 'Nosso Método de Trabalho | A. Caruso Osório',
				description: 'Como criamos soluções digitais para empresas de Osório/RS'
			}
		};
	};
</script>

<div class="uk-container">
	<h1>Nosso <span>Processo</span> em 3 Passos</h1>
	<LambdaPillars />
	<ol>
		<li>
			<strong>Diagnóstico Local:</strong> Análise do mercado de Osório
		</li>
		<li>
			<strong>Solução Personalizada:</strong> Estratégias para seu público
		</li>
		<li>
			<strong>Resultados Mensuráveis:</strong> Acompanhamento contínuo
		</li>
	</ol>
	<LocalCTA text="Quer aplicar esse método no seu negócio?" buttonText="Agendar Consultoria" />
</div>
