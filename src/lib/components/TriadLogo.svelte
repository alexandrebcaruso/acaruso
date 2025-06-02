<!-- src/lib/components/TriadLogo.svelte -->
<script lang="ts">
	import Logo from './Logo.svelte';

	export let containerSize = 500; // Tamanho do container SVG
	export let logoScale = 0.8; // Escala do logo (0.8 = 80% do original)
	export let colors = {
		plan: '#333',
		design: '#333',
		develop: '#333',
		text: '#333' 
	};

	// Tamanho original do logo (80x129.44)
	const baseLogoWidth = 80;
	const baseLogoHeight = 129.44;

	$: center = containerSize / 2;
	$: circleRadius = containerSize * 0.33;
	$: logoWidth = baseLogoWidth * logoScale;
	$: logoHeight = baseLogoHeight * logoScale;
	$: logoX = center - logoWidth / 2;
	$: logoY = center - logoHeight / 2;
</script>

<svg
	class="triad-logo"
	width={containerSize}
	height={containerSize}
	viewBox={`0 0 ${containerSize} ${containerSize}`}
	aria-label="Pilares da Agência Caruso"
>
	<circle
		cx={center - circleRadius * 0.5}
		cy={center - circleRadius * 0.25}
		r={circleRadius}
		fill="none"
		stroke={colors.plan}
		stroke-width="1"
        opacity="0.3"
	/>
	<circle
		cx={center + circleRadius * 0.5}
		cy={center - circleRadius * 0.25}
		r={circleRadius}
		fill="none"
		stroke={colors.design}
		stroke-width="1"
        opacity="0.3"
	/>
	<circle
		cx={center}
		cy={center + circleRadius * 0.5}
		r={circleRadius}
		fill="none"
		stroke={colors.develop}
		stroke-width="1"
        opacity="0.3"
	/>

	<foreignObject x={logoX} y={logoY} width={logoWidth} height={logoHeight}>
		<Logo width={logoWidth} color="#a00" className="triad-logo__lambda" />
	</foreignObject>

	<text
		x={center - circleRadius * 0.5}
		y={center - circleRadius * 0.25}
		text-anchor="middle"
		fill={colors.text}
		font-size={containerSize * -0.05}
		font-weight="600"
	>
		Planejamento
	</text>
	<text
		x={center + circleRadius * 0.5}
		y={center - circleRadius * 0.25}
		text-anchor="middle"
		fill={colors.text}
		font-size={containerSize * -0.05}
		font-weight="600"
	>
		Design
	</text>
	<text
		x={center}
		y={center + circleRadius * 0.5}
		text-anchor="middle"
		fill={colors.text}
		font-size={containerSize * -0.05}
		font-weight="600"
	>
		Desenvolvimento
	</text>
</svg>

<style>
	.triad-logo {
		max-width: 100%;
		height: auto;
	}
	.triad-logo__lambda {
		pointer-events: none;
	}
</style>
