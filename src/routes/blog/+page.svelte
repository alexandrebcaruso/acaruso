<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
    export const load = () => {
      return {
        metadata: {
          title: "Artigos sobre Marketing Digital em Osório | A. Caruso",
          description: "Dicas e estratégias para empresas de Osório/RS aumentarem vendas online"
        }
      };
    };
  </script>
  
  <h1>Artigos para <span>Negócios Locais</span></h1>
  <div class="article-grid">
    <!-- Exemplo de artigo -->
    <article class="article-card">
      <h2>Como Aparecer no Google em Osório</h2>
      <p>Guia completo de SEO local para pequenos negócios</p>
      <a href="/blog/como-aparecer-no-google-osorio">Ler Artigo →</a>
    </article>
  </div>
  
  <style>
    .article-grid {
      display: grid;
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .article-card {
      border: 1px solid #e5e7eb;
      padding: 1.5rem;
      border-radius: 0.5rem;
    }
  </style>