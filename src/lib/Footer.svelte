<!-- src/lib/Footer.svelte -->
<script lang="ts">
	import Logo from './components/Logo.svelte';
</script>

<footer class="uk-section uk-section-secondary">
	<div class="uk-container">
		<div class="uk-grid-divider" uk-grid>
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
					<li>Telefone: (51) 99999-9999</li>
					<li>Av. Getúlio Vargas, 123</li>
				</ul>
			</div>
			<div class="uk-width-1-3@m">
				<h3>Redes Sociais</h3>
				<div class="uk-margin">
					<a href="#" class="uk-icon-button" uk-icon="twitter"></a>
					<a href="#" class="uk-icon-button" uk-icon="instagram"></a>
					<a href="#" class="uk-icon-button" uk-icon="linkedin"></a>
				</div>
			</div>
		</div>
	</div>
</footer>
