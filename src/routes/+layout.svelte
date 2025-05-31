<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Chatbot from '$lib/Chatbot.svelte';

	import 'uikit/dist/css/uikit.min.css';
	import UIkit from 'uikit';
	import Icons from 'uikit/dist/js/uikit-icons';
	import { onMount } from 'svelte';
  
	onMount(() => {
	  	UIkit.use(Icons);
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="canonical" href="https://www.acaruso.com.br" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preload" as="style" href="uikit/dist/css/uikit.min.css">
</svelte:head>

<style>
    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .main-content {
        flex: 1;
    }
</style>

<div class="layout">
	<div class="main-content">
		<Header />
		<slot />
	</div>
	<Footer />
	<Chatbot />
</div>