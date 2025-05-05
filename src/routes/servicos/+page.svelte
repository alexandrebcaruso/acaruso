<!-- src/routes/servicos/+page.svelte -->
<script lang="ts">
	import LocalServiceCard from '$lib/components/LocalServiceCard.svelte';
	import { services } from '$lib/constants/services';
  
	export const load = () => {
	  return {
		metadata: {
		  title: "Serviços para Empresas de Osório | A. Caruso",
		  description: "Soluções completas em marketing digital, design e desenvolvimento web"
		}
	  };
	};
  </script>
  
  <h1>Serviços <span>Personalizados</span> para Osório</h1>
  <div class="services-grid">
	{#each services as service}
	  <LocalServiceCard {service} />
	{/each}
  </div>
  
  <style>
	.services-grid {
	  display: grid;
	  gap: 2rem;
	  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
  </style>