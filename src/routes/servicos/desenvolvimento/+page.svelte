<!-- src/routes/servicos/desenvolvimento/+page.svelte -->
<script lang="ts">
    export let data;
</script>

<main class="dev-page">
    <h1 class="page-title">Desenvolvimento de Software</h1>
    
    <div class="dev-content">
        <div class="dev-card">
            <h2>Soluções Personalizadas</h2>
            <p>Desenvolvemos sistemas sob medida para atender às necessidades específicas do seu negócio.</p>
        </div>

        <div class="dev-card">
            <h2>Tecnologias Modernas</h2>
            <p>Utilizamos as melhores tecnologias do mercado para garantir performance e escalabilidade.</p>
        </div>

        <div class="dev-card">
            <h2>Integração com IA</h2>
            <p>Implementamos soluções inteligentes que automatizam processos e melhoram resultados.</p>
        </div>
    </div>
</main>

<style>
    .dev-page {
        padding: 4rem 0;
    }

    .page-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 3rem;
        color: var(--gray-900);
        text-align: center;
    }

    .dev-content {
        max-width: 72rem;
        margin: 0 auto;
        padding: 0 1rem;
        display: grid;
        gap: 2rem;
    }

    .dev-card {
        background: var(--white);
        padding: 2rem;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .dev-card h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--gray-900);
    }

    .dev-card p {
        color: var(--gray-600);
        line-height: 1.6;
    }

    @media (min-width: 768px) {
        .dev-content {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 640px) {
        .page-title {
            font-size: 2rem;
        }
        
        .dev-content {
            grid-template-columns: 1fr;
        }
    }
</style>