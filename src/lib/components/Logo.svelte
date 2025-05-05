<!-- src/lib/components/Logo.svelte -->
<script lang="ts">
	export let width = 80; // Largura original em px
	export let color = '#a00';
	export let className = '';

	// Calcula altura proporcional
	$: height = (129.44 / 80) * width;
	$: viewBox = `0 0 80 ${129.44}`;
</script>

<svg
	class="logo ${className}"
	style="width: {width}px; height: {height}px"
	{viewBox}
	aria-label="Logo A. Caruso"
	preserveAspectRatio="xMidYMin meet"
>
	<line
		x1="10"
		y1="119.44"
		x2="40"
		y2="10"
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
	/>
	<line
		x1="70"
		y1="119.44"
		x2="40"
		y2="10"
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
	/>
</svg>

<style>
	.logo {
		display: inline-block;
		transition: all 0.3s ease;
	}
</style>
