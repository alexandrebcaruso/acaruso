<!-- src/routes/processo/+page.svelte-->
<main class="process-page">
    <h1>Método Comprovado para Empresas de Osório</h1>

    <div class="process-steps">
        <div class="process-step">
            <div class="step-number">1</div>
            <h3>Diagnóstico Gratuito</h3>
            <p>Análise completa do seu site e redes sociais</p>
        </div>

        <div class="process-step">
            <div class="step-number">2</div>
            <h3>Plano Personalizado</h3>
            <p>Estratégias adaptadas para negócios locais</p>
        </div>

        <!-- Add more steps -->
    </div>
</main>

<style>
    .process-page {
        padding: 4rem 0;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .process-page h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 3rem;
        text-align: center;
        color: var(--gray-900);
    }

    .process-steps {
        display: grid;
        gap: 2rem;
    }

    .process-step {
        padding: 1rem;
        text-align: center;
    }

    .step-number {
        width: 3rem;
        height: 3rem;
        background-color: var(--primary-100);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        font-weight: 600;
    }

    .process-step h3 {
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--gray-900);
    }

    .process-step p {
        font-size: 0.875rem;
        color: var(--gray-600);
    }

    @media (min-width: 768px) {
        .process-steps {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (max-width: 767px) {
        .process-steps {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 480px) {
        .process-steps {
            grid-template-columns: 1fr;
        }
    }
</style>