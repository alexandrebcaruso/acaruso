<!-- src/routes/servicos/desenvolvimento/+page.svelte -->
<script lang="ts">
    import LocalCTA from '$lib/components/LocalCTA.svelte';
  
    export const load = () => {
      return {
        metadata: {
          title: "Criação de Sites em Osório | SEO Integrado",
          description: "Desenvolvimento de sites rápidos e otimizados para empresas de Osório"
        }
      };
    };
  </script>
  
  <h1>Sites <span>Otimizados</span> para Osório</h1>
  <ul>
    <li>Mobile-first para clientes locais</li>
    <li>Integração com Google Meu Negócio</li>
    <li>Hospedagem em servidores brasileiros</li>
  </ul>
  <LocalCTA 
    text="Quer um site que aparece no Google?" 
    buttonText="Falar com Especialista" 
  />