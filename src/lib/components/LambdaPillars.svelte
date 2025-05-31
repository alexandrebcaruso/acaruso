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
	<div class="pillars-grid">
		{#each pillars as pillar}
			<div class="pillar">
				<span class="icon">{pillar.icon}</span>
				<h3>{pillar.title}</h3>
			</div>
		{/each}
	</div>
</div>

<style>
	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem; /* Space above the logo */
	}
</style>
