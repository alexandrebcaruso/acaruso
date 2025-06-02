<!-- src/lib/components/LocalCTA.svelte -->
<script lang="ts">
	export let text: string;
	export let buttonText: string;
	export let className = '';
</script>

<div class="uk-text-center">
	<p class="uk-text-lead">{text}</p>
	<button class={`uk-button uk-button-primary ${className}`}>
		{buttonText}
	</button>
</div>
