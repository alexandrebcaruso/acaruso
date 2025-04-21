<!-- src/routes/servicos/design/+page.svelte -->
<script lang="ts">
    export let data;
</script>

<main class="design-page">
    <h1 class="page-title">Design Profissional</h1>
    
    <div class="design-content">
        <div class="design-card">
            <h2>Criação de Identidade Visual</h2>
            <p>Desenvolvemos marcas memoráveis que comunicam seus valores e se conectam com seu público.</p>
        </div>

        <div class="design-card">
            <h2>UI/UX Design</h2>
            <p>Interfaces intuitivas e agradáveis que melhoram a experiência do usuário e aumentam conversões.</p>
        </div>
    </div>
</main>

<style>
    .design-page {
        padding: 4rem 0;
    }

    .page-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 3rem;
        color: var(--gray-900);
        text-align: center;
    }

    .design-content {
        max-width: 72rem;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .design-card {
        background: var(--white);
        padding: 2rem;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
    }

    .design-card h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--gray-900);
    }

    .design-card p {
        color: var(--gray-600);
        line-height: 1.6;
    }

    @media (max-width: 640px) {
        .page-title {
            font-size: 2rem;
        }
        
        .design-card {
            padding: 1.5rem;
        }
    }
</style>