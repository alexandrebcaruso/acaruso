<!-- src/routes/+page.svelte -->
<script lang="ts">
	import LocalCTA from '$lib/components/LocalCTA.svelte';
	import BannerImage from '$lib/assets/images/homepage-banner.jpeg';
</script>

<div class="banner-image" style="background-image: url('{BannerImage}')" aria-hidden="true"></div>
<div class="uk-container main-heading">
	<h1 class="text-heading">
		Soluções Digitais <span class="text-primary">para Osório</span>
	</h1>
	<LocalCTA text="Quer aumentar suas vendas online?" buttonText="Fale com um Especialista" />
</div>
<style>
	.banner-image {
		width: 100%;
		height: calc(60vh - 80px);
		background-size: cover;
		background-position: center;
		position: flex;
		align-content: center;
	}

	.text-heading { 
		font-size: clamp(2rem, 5vw, 3.5rem);
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		text-align: center;
		margin: 0;
	}

</style>
