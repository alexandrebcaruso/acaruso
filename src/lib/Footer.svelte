<!-- src/lib/Footer.svelte -->
<script lang="ts">
	import Logo from './components/Logo.svelte';

	// Social media links (replace with actual URLs)
	const socialLinks = [
		// { platform: 'twitter', url: 'https://twitter.com/acaruso' },
		// { platform: 'instagram', url: 'https://instagram.com/acaruso' },
		{ platform: 'linkedin', url: 'https://www.linkedin.com/in/alexandrebcaruso/' }
	];
</script>

<footer class="uk-section uk-section-secondary">
	<div class="uk-container">
		<div class="uk-grid-divider uk-grid">
			<div class="uk-width-1-3@m">
				<Logo width={60} color="#fff" />
				<p class="uk-text-muted">
					Transformando negócios em Osório/RS através de soluções digitais
				</p>
			</div>
			<div class="uk-width-1-3@m">
				<h3>Contato</h3>
				<ul class="uk-list">
					<li>Email: contato@acaruso.com</li>
					<li>Telefone: (51) 9 9894 6871</li>
					<li>Av. Getúlio Vargas, 123</li>
				</ul>
			</div>
			<div class="uk-width-1-3@m">
				<h3>Redes Sociais</h3>
				<div class="uk-margin">
					{#each socialLinks as link}
						<a
							href={link.url}
							class="uk-icon-button"
							data-uk-icon={`icon: ${link.platform}; ratio: 0.8`}
							aria-label={`${link.platform} da A. Caruso`}
							target="_blank"
							rel="noopener noreferrer"
						></a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>
