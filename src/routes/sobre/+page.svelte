<!-- src/routes/sobre/+page.svelte -->
<script lang="ts">
	import LambdaPillars from '$lib/components/LambdaPillars.svelte';

	export const load = () => {
		return {
			metadata: {
				title: 'Sobre a A. Caruso | Agência Digital em Osório',
				description: 'Conheça nossa equipe especializada em soluções digitais para Osório/RS'
			}
		};
	};
</script>

<div class="uk-container">
	<h1>Nossa <span>História</span> em Osório</h1>
	<p>Fundada em 2023 para impulsionar negócios locais através de soluções digitais inteligentes.</p>

	<div class="team">
		<h2>Conheça o Fundador</h2>
		<div class="member">
			<h3>Alexandre B. Caruso</h3>
			<p>Publicitário especializado em estratégias digitais para pequenos negócios</p>
		</div>
	</div>
</div>
