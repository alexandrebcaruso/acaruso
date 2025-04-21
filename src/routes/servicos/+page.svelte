<!-- src/routes/servicos/+page.svelte -->
<script lang="ts">
	export let data;
</script>

<main class="services-page">
	<h1 class="page-title">Nossos Serviços</h1>

	<div class="services-grid">
		<!-- Marketing Digital Card -->
		<a href="/servicos/marketing" class="service-card">
			<div class="service-icon">🎯</div>
			<h2>Marketing Digital</h2>
			<p>Soluções completas para aumentar sua presença digital</p>
		</a>

		<!-- UX/Design Card -->
		<a href="/servicos/design" class="service-card">
			<div class="service-icon">🎨</div>
			<h2>UX/Design</h2>
			<p>Designs que convertem e encantam seus clientes</p>
		</a>

		<!-- Software Development Card -->
		<a href="/servicos/desenvolvimento" class="service-card">
			<div class="service-icon">💻</div>
			<h2>Desenvolvimento</h2>
			<p>Soluções tecnológicas personalizadas</p>
		</a>
	</div>
</main>

<style>
	.services-page {
		padding: 4rem 0;
	}

	.page-title {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 3rem;
		text-align: center;
		color: var(--gray-900);
	}

	.services-grid {
		display: grid;
		gap: 2rem;
		max-width: 72rem;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.service-card {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.service-card h2 {
		font-size: 1.25rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--gray-900);
	}

	.service-card p {
		color: var(--gray-600);
	}

	.service-icon {
		width: 3rem;
		height: 3rem;
		background-color: var(--primary-100);
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		.services-grid {
			grid-template-columns: 1fr;
		}
	}   
</style>
