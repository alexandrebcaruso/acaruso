<!-- src/lib/components/LambdaPillars.svelte -->
<script lang="ts">
	import TriadLogo from './TriadLogo.svelte';

	const pillars = [
		{ title: 'Planejamento', icon: '📊' },
		{ title: 'Design', icon: '🎨' },
		{ title: 'Desenvolvimento', icon: '💻' }
	];

</script>

<div class="pillars-container">
	<div class="logo-container">
		<TriadLogo containerSize={500} logoScale={0.8} />
	</div>
</div>

<style>
	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem; /* Space above the logo */
	}
</style>
