<!-- src/lib/Header.svelte -->
<script lang="ts">
	import Logo from './components/Logo.svelte';
	let menuOpen = false;

	const navLinks = [
		{ href: '/servicos', text: 'Serviços' },
		{ href: '/sobre', text: 'Sobre' },
		{ href: '/metodo', text: 'Método' }
	];
</script>

<div class="uk-container">
	<nav class="uk-navbar-container uk-navbar">
		<div class="uk-navbar-left">
			<a href="/" class="uk-navbar-item uk-logo">
				<Logo width={40} />
			</a>
		</div>
		<div class="uk-navbar-right">
			<ul class="uk-navbar-nav">
				{#each navLinks as link}
					<li class="hover:border-b-2 hover:border-primary-600 transition">
						<a href={link.href} class="px-4 py-6">{link.text}</a>
					</li>
				{/each}
				<li>
					<a href="/contato" class="uk-button ml-4"> Contato </a>
				</li>
			</ul>
		</div>
	</nav>
</div>
