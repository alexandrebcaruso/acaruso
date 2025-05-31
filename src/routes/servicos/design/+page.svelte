<!-- src/routes/servicos/design/+page.svelte -->
<script lang="ts">
	import LocalCTA from '$lib/components/LocalCTA.svelte';

	export const load = () => {
		return {
			metadata: {
				title: 'Design Profissional em Osório | Identidade Visual',
				description: 'Criação de logos, sites e materiais gráficos para negócios de Osório/RS'
			}
		};
	};
</script>

<div class="uk-container">
	<h1>Design que <span>Converte</span> em Osório</h1>
	<ul>
		<li>Logotipos com identidade regional</li>
		<li>Cartões de visita e materiais impressos</li>
		<li>Design para redes sociais</li>
	</ul>
	<LocalCTA text="Precisa de um design profissional?" buttonText="Solicitar Orçamento" />
</div>
