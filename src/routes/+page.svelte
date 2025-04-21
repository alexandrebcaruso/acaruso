<!-- src/routes/+page.svelte -->
<svelte:head>
	<title>Agência Digital em Osório | Marketing & Desenvolvimento</title>
	<meta
		name="description"
		content="Agência digital especializada em soluções para empresas de Osório e região. Marketing digital, design e desenvolvimento de software com IA."
	/>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			"name": "Your Agency Name",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Osório",
				"addressRegion": "RS",
				"postalCode": "95520-000"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": "-29.8868",
				"longitude": "-50.2697"
			}
		}
	</script>
</svelte:head>

<div class="hero">
	<section class="hero-content">
		<h1>Transforme Seu Negócio Digital em Osório</h1>
		<p class="subtitle">
			Soluções completas em Marketing Digital, Design Profissional e Automação Inteligente para
			empresas da região
		</p>
		<a href="/contato" class="btn btn-primary"> Agende Sua Consultoria Gratuita </a>
	</section>

	<section class="services-section">
		<h2 class="section-title">Nossas Especialidades</h2>
		<div class="grid grid-cols-3">
			<div class="card">
				<div class="card-icon">🎯</div>
				<h3>Marketing Digital</h3>
				<p>Gestão completa de campanhas Google Ads e redes sociais</p>
				<a href="/servicos/marketing" class="card-link"> Saiba mais → </a>
			</div>

			<!-- Repeat for other services -->
		</div>
	</section>
</div>

<style>
	.hero {
		background: linear-gradient(to bottom, var(--primary-50), var(--white));
		padding: 5rem 0;
	}

	.hero-content {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 1rem;
		text-align: center;
	}

	.hero h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: var(--gray-900);
	}

	.subtitle {
		font-size: 1.25rem;
		margin-bottom: 2rem;
		color: var(--gray-600);
		max-width: 36rem;
		margin-left: auto;
		margin-right: auto;
	}

	.services-section {
		margin-top: 5rem;
		padding: 0 1rem;
	}

	.card {
		margin-bottom: 1rem;
	}

	.card h3 {
		font-size: 1.25rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--gray-900);
	}

	.card p {
		margin-bottom: 1rem;
		color: var(--gray-600);
	}

	.card-icon {
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

	.card-link {
		color: var(--primary-600);
		font-weight: 500;
	}

	.card-link:hover {
		color: var(--primary-700);
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2rem;
		}

		.subtitle {
			font-size: 1.1rem;
		}

		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
