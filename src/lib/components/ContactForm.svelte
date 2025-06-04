<!-- src/lib/components/ContactForm.svelte -->
<script lang="ts">
    import { toast } from '@zerodevx/svelte-toast';
    let isLoading = false;
    let isSuccess = false;
  
    let form = {
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
        origin: ''
    };

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        isLoading = true;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...form,
                    region: 'Osório/RS',
                    source: 'website_form'
                })
            });

            const result = await response.json();

            if (result.status === 'success') {
                isSuccess = true;
                toast.push('Mensagem enviada com sucesso! Entraremos em contato em breve.', {
                    theme: {
                        '--toastBackground': '#4CAF50',
                        '--toastColor': 'white'
                    }
                });

                form = {
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    service: '',
                    origin: ''
                };
            } else {
                throw new Error(result.message || 'Erro no envio');
            }
        } catch (error: any) {
            toast.push(error.message || 'Erro ao enviar mensagem. Tente novamente ou nos chame no WhatsApp.', {
                theme: {
                    '--toastBackground': '#F44336',
                    '--toastColor': 'white'
                }
            });
        } finally {
            isLoading = false;
        }
    };
</script>

<form on:submit={handleSubmit} class="contact-form">
    {#if isSuccess}
        <div class="uk-alert uk-alert-success">
            <p>Obrigado pelo seu contato! Retornaremos em até 24 horas.</p>
        </div>
    {:else}
        <div class="uk-margin">
            <label class="uk-form-label" for="name">Nome Completo*</label>
            <input 
                class="uk-input" 
                type="text" 
                id="name" 
                bind:value={form.name} 
                required 
                disabled={isLoading}
            />
        </div>

        <div class="uk-grid-small uk-child-width-1-2@s uk-grid">
            <div>
                <label class="uk-form-label" for="email">E-mail*</label>
                <input 
                    class="uk-input" 
                    type="email" 
                    id="email" 
                    bind:value={form.email} 
                    required 
                    disabled={isLoading}
                />
            </div>
            <div>
                <label class="uk-form-label" for="phone">Telefone/WhatsApp</label>
                <input 
                    class="uk-input" 
                    type="tel" 
                    id="phone" 
                    bind:value={form.phone} 
                    disabled={isLoading}
                />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="service">Serviço de Interesse</label>
            <select 
                class="uk-select" 
                id="service" 
                bind:value={form.service}
                disabled={isLoading}
            >
                <option value="">Selecione...</option>
                <option>Site Institucional</option>
                <option>Marketing Digital</option>
                <option>Design Gráfico</option>
                <option>Outro</option>
            </select>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="origin">Como nos encontrou?</label>
            <select 
                class="uk-select" 
                id="origin" 
                bind:value={form.origin}
                disabled={isLoading}
            >
                <option value="">Selecione...</option>
                <option>Google</option>
                <option>Indicação</option>
                <option>Redes Sociais</option>
                <option>Outro</option>
            </select>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="message">Mensagem*</label>
            <textarea 
                class="uk-textarea" 
                id="message" 
                rows={5} 
                bind:value={form.message} 
                required 
                disabled={isLoading}
            ></textarea>
        </div>

        <div class="uk-margin">
            <button 
                class="uk-button uk-button-primary" 
                type="submit" 
                disabled={isLoading}
            >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
        </div>
    {/if}
</form>

<style>
    .contact-form {
        max-width: 800px;
        margin: 0 auto;
    }
</style>