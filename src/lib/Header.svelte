<!-- src/lib/Header.svelte -->
<script lang="ts">
	let menuOpen = false;
</script>

<header class="header">
	<nav class="nav-container">
		<a href="/" class="logo">Acaruso Digital</a>

		<div class="desktop-menu">
			<a href="/servicos">Serviços</a>
			<a href="/sobre">Sobre</a>
			<a href="/processo">Método</a>
			<a href="/contato" class="contact-btn">Contato</a>
		</div>

		<button class="mobile-menu-btn" on:click={() => (menuOpen = !menuOpen)}>
			<svg class="menu-icon" viewBox="0 0 24 24">
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
	</nav>

	{#if menuOpen}
		<div class="mobile-menu">
			<a href="/servicos">Serviços</a>
			<a href="/sobre">Sobre</a>
			<a href="/processo">Método</a>
			<a href="/contato">Contato</a>
		</div>
	{/if}
</header>

<style>
	.header {
		background-color: var(--white);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--primary-800);
		text-decoration: none;
	}

	.desktop-menu {
		display: none;
	}

	.desktop-menu a {
		color: var(--gray-700);
		text-decoration: none;
		margin-left: 2rem;
		transition: color 0.3s ease;
	}

	.desktop-menu a:hover {
		color: var(--primary-600);
	}

	.contact-btn {
		background-color: var(--primary-600);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 0.375rem;
		transition: background-color 0.3s ease;
	}

	.contact-btn:hover {
		background-color: var(--primary-700);
	}

	.mobile-menu-btn {
		padding: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.menu-icon {
		width: 1.5rem;
		height: 1.5rem;
	}

	.mobile-menu {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		background-color: var(--white);
		border-top: 1px solid rgba(0, 0, 0, 0.1);
	}

	.mobile-menu a {
		padding: 0.75rem 0;
		color: var(--gray-700);
		text-decoration: none;
		border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	}

	@media (min-width: 768px) {
		.desktop-menu {
			display: flex;
			align-items: center;
		}

		.mobile-menu-btn {
			display: none;
		}
	}
</style>
