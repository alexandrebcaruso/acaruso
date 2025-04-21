<!-- src/routes/contato/+page.svelte -->
<script lang="ts">
	let form = {
		name: '',
		email: '',
		businessType: '',
		message: ''
	};

	let submitted = false;

	function handleSubmit() {
		// Add form validation and submission logic
		submitted = true;
	}
</script>

<main class="contact-page">
	<div class="contact-container">
		<h1>Fale com Nossa Equipe</h1>

		<div class="contact-form">
			<form class="form">
				<div class="form-group">
					<label>Nome completo</label>
					<input type="text" />
				</div>

				<div class="form-group">
					<label>E-mail</label>
					<input type="email" />
				</div>

				<div class="form-group">
					<label>Mensagem</label>
					<textarea rows="4"></textarea>
				</div>

				<button type="submit" class="btn btn-primary"> Enviar Mensagem </button>
			</form>
		</div>
	</div>
</main>

<style>
	.contact-page {
		padding: 4rem 0;
	}

	.contact-container {
		max-width: 42rem;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.contact-page h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 2rem;
		color: var(--gray-900);
	}

	.contact-form {
		background: var(--white);
		border-radius: 0.75rem;
		padding: 2rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	.form-group label {
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
		color: var(--gray-700);
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		border: 1px solid #d1d5db;
		border-radius: 0.5rem;
		padding: 0.75rem;
		transition: all 0.3s ease;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		border-color: var(--primary-500);
		outline: none;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
	}

	@media (max-width: 640px) {
		.contact-page h1 {
			font-size: 2rem;
		}
	}
</style>
