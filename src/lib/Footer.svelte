<!-- src/lib/Footer.svelte -->
<footer class="footer">
    <div class="footer-container">
        <div class="footer-section">
            <h3>Acaruso Digital</h3>
            <p>
                Transformando negócios na região de Osório/RS através de soluções digitais inteligentes
            </p>
        </div>

        <div class="footer-section">
            <h4>Contato</h4>
            <ul>
                <li>Email: contato@acaruso.com</li>
                <li>Telefone: (51) 99999-9999</li>
                <li>Av. Getúlio Vargas, 123 - Osório/RS</li>
            </ul>
        </div>

        <div class="footer-section">
            <h4>Redes Sociais</h4>
            <div class="social-icons">
                <a href="#" class="social-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                </a>
                <!-- Add other social icons -->
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: var(--gray-50);
        margin-top: 5rem;
        padding: 3rem 0;
    }

    .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        display: grid;
        gap: 2rem;
    }

    .footer-section {
        margin-bottom: 1.5rem;
    }

    .footer-section h3,
    .footer-section h4 {
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--gray-900);
    }

    .footer-section p,
    .footer-section li {
        font-size: 0.875rem;
        color: var(--gray-600);
        line-height: 1.6;
    }

    .footer-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .footer-section li {
        margin-bottom: 0.5rem;
    }

    .social-icons {
        display: flex;
        gap: 1rem;
    }

    .social-icon {
        color: var(--primary-600);
        transition: color 0.3s ease;
    }

    .social-icon:hover {
        color: var(--primary-700);
    }

    .social-icon svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: currentColor;
    }

    @media (min-width: 768px) {
        .footer-container {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>