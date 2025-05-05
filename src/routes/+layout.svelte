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
	  UIkit.use(Icons); // Ativa ícones
	});
</script>
<svelte:head>
	<!-- Metadados padrão -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="canonical" href="https://acaruso.com.br" />
</svelte:head>

<Header />
<slot /> <!-- Páginas serão injetadas aqui -->
<Footer />
<Chatbot />
