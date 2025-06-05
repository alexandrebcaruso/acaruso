<script lang="ts">
	import Logo from './components/Logo.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const navLinks: Array<{ href: string; text: string }> = [
		{ href: '/servicos', text: 'Serviços' },
		{ href: '/sobre', text: 'A Agência' },
		{ href: '/metodo', text: 'Método' }
	];

	// State variables
	let navElement: HTMLElement;
	let scrolled = false;
	let menuOpen = false;
	let isMobile = false;

	onMount(() => {
		if (browser) {
			// Check initial screen size
			checkMobile();

			// Set up scroll listener
			const handleScroll = () => {
				scrolled = window.scrollY > 50;
			};

			// Set up resize listener
			const handleResize = () => {
				checkMobile();
				if (!isMobile) menuOpen = false;
				console.log(isMobile);
			};

			window.addEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('scroll', handleScroll);
				window.removeEventListener('resize', handleResize);
			};
		}
	});

	function checkMobile() {
		if (browser) {
			isMobile = window.innerWidth < 768;
		}
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
		document.body.style.overflow = menuOpen ? 'hidden' : '';
	}

	function closeMenu() {
		menuOpen = false;
		document.body.style.overflow = '';
	}
</script>

<nav bind:this={navElement} class:scrolled class:menu-open={menuOpen}>
	<div class="uk-container">
		<div class="uk-navbar">
			<a href="/" class="uk-navbar-item uk-logo" on:click={closeMenu}>
				<div class="uk-navbar-left">
					<Logo width={40} />
				</div>
				<span style="font-family: 'Inter', -apple-system, sans-serif;">Agência <span class="text-primary">Caruso</span></span>
			</a>
			<!-- Desktop Navigation -->
			<div class="uk-navbar-right uk-visible@s">
				<ul class="uk-navbar-nav">
					{#each navLinks as link}
						<li class="hover:border-b-2 hover:border-primary-600 transition">
							<a href={link.href} on:click={closeMenu}>{link.text}</a>
						</li>
					{/each}
					<li>
						<a href="/contato" class="uk-button ml-4" on:click={closeMenu}>
							Contato
						</a>
					</li>
				</ul>
			</div>

			<!-- Mobile Menu Button -->
			<div class="uk-navbar-right block uk-hidden@s">
				<button
					class="uk-button uk-button-text menu-toggle"
					on:click={toggleMenu}
					aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
					aria-expanded={menuOpen}
				>
					{#if menuOpen}
						<span class="text-2xl">✕</span>
					{:else}
						<span class="text-2xl">☰</span>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu Overlay -->
	{#if isMobile && menuOpen}
		<div class="mobile-menu-overlay">
			<div class="mobile-menu-content">
				<ul class="mobile-nav-links">
					{#each navLinks as link}
						<li>
							<a href={link.href} class="mobile-nav-link" on:click={closeMenu}>
								{link.text}
							</a>
						</li>
					{/each}
					<li>
						<a href="/contato" class="mobile-nav-cta" on:click={closeMenu}> Contato </a>
					</li>
				</ul>
			</div>
		</div>
	{/if}
</nav>

<style>
	nav {
		width: 100%;
		z-index: 1000;
		background: rgba(255, 255, 255, 0.95);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
	}

	nav.scrolled {
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
	}

	.menu-toggle {
		padding: 0.5rem;
		margin-right: -0.5rem;
	}

	.mobile-menu-overlay {
		position: fixed;
		top: var(--nav-height, 60px);
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.98);
		z-index: 999;
		overflow-y: auto;
	}

	.mobile-menu-content {
		padding: 2rem;
	}

	.mobile-nav-links {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.mobile-nav-link {
		display: block;
		padding: 1rem 0;
		font-size: 1.25rem;
		color: var(--gray-900);
		border-bottom: 1px solid var(--gray-100);
		transition: color 0.2s;
	}

	.mobile-nav-link:hover {
		color: var(--primary-600);
	}

	.mobile-nav-cta {
		display: inline-block;
		margin-top: 1.5rem;
		padding: 0.75rem 1.5rem;
		background: var(--primary-600);
		color: white;
		border-radius: 0.25rem;
		font-weight: 600;
	}

	.uk-navbar {
		align-items: center;
	}

</style>