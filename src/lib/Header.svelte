<!-- src/lib/Header.svelte -->
<script lang="ts">
	import Logo from './components/Logo.svelte';
	let menuOpen = false;

	const navLinks = [
		{ href: '/servicos', text: 'Serviços em Osório' },
		{ href: '/sobre', text: 'Sobre Nossa Agência' },
		{ href: '/metodo', text: 'Método de Trabalho' }
	];
</script>

<header class="uk-navbar-container" uk-navbar>
	<div class="uk-navbar-left">
		<a href="/" class="uk-navbar-item uk-logo">
			<Logo width={40} />
			<span class="uk-margin-small-left uk-text-bold">A. Caruso</span>
			<span class="uk-visible@m uk-margin-small-left uk-text-muted">Agência Digital em Osório</span>
		</a>
	</div>
	<div class="uk-navbar-right">
		<ul class="uk-navbar-nav">
			{#each navLinks as link}
				<li class="uk-active:border-bottom uk-border-primary">
					<a href={link.href}>{link.text}</a>
				</li>
			{/each}
			<li>
				<a href="/contato" class="uk-button uk-button-primary uk-margin-left"> Contato </a>
			</li>
		</ul>
	</div>
</header>
