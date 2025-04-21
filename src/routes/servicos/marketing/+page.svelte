<!-- src/routes/servicos/marketing/+page.svelte -->
<script lang="ts">
    export let data;
</script>

<main class="marketing-page">
    <h1 class="page-title">Marketing Digital para Osório</h1>

    <div class="marketing-grid">
        <div class="marketing-card">
            <h2>SEO Local</h2>
            <ul>
                <li>Otimização para buscas como "restaurante em Osório"</li>
                <li>Gestão do Google Meu Negócio</li>
                <li>Relatórios mensais de performance</li>
            </ul>
        </div>

        <div class="marketing-card">
            <h2>Mídias Sociais</h2>
            <ul>
                <li>Gestão de redes sociais</li>
                <li>Criação de conteúdo localizado</li>
                <li>Anúncios patrocinados</li>
            </ul>
        </div>
    </div>
</main>

<style>
    .marketing-page {
        padding: 4rem 0;
    }

    .page-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        color: var(--gray-900);
        text-align: center;
    }

    .marketing-grid {
        display: grid;
        gap: 2rem;
        max-width: 72rem;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .marketing-card {
        background: var(--white);
        padding: 2rem;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .marketing-card h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--gray-900);
    }

    .marketing-card ul {
        padding-left: 1.5rem;
        list-style-type: disc;
    }

    .marketing-card li {
        margin-bottom: 0.75rem;
        color: var(--gray-600);
    }

    @media (min-width: 768px) {
        .marketing-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .page-title {
            font-size: 2rem;
        }
    }
</style>
