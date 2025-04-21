<!-- src/routes/+layout.svelte -->
<script lang="ts">
	let { children } = $props();
	import '../app.css';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Chatbot from '$lib/Chatbot.svelte';
</script>

<div class="layout">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
	<Chatbot />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}
</style>
