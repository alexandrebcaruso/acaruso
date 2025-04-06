<script lang="ts">
    import Chatbot from '$lib/Chatbot.svelte';
</script>

<main class="min-h-screen flex items-center justify-center flex-col">
    <slot />
    <Chatbot />
</main>