<!-- src/lib/components/ContactForm.svelte -->
<script lang="ts">
    import { contacts } from '$lib/constants/contacts';
  
    let form = {
      name: '',
      email: '',
      phone: '',
      message: '',
      origin: ''
    };
  
    const handleSubmit = (e: Event) => {
      e.preventDefault();
    };
</script>
  
<form on:submit={handleSubmit}>
    <input type="hidden" name="regiao" value="Osório/RS" />
    
    <label>
      Nome Completo*
      <input type="text" bind:value={form.name} required />
    </label>
  
    <label>
      Como nos encontrou?
      <select bind:value={form.origin}>
        <option value="">Selecione...</option>
        <option>Google</option>
        <option>Indicação</option>
        <option>Redes Sociais</option>
        <option>Outro</option>
      </select>
    </label>
  
    <button type="submit">Enviar</button>
</form>
  
<style>
    form {
      display: grid;
      gap: 1rem;
    }
    label {
      display: block;
    }
</style>