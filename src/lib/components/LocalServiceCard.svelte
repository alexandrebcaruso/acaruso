<!-- src/lib/components/LocalServiceCard.svelte -->
<script lang="ts">
    export let service: {
      title: string;
      description: string;
      icon: string;
      href: string;
    };
  </script>
  
  <div class="local-card">
    <div class="badge">Disponível em Osório</div>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
    <a href={service.href} class="local-link">Saiba mais</a>
  </div>
  
  <style>
    .local-card {
      position: relative;
      border: 1px solid var(--primary-100);
      padding: 1.5rem;
      border-radius: 0.5rem;
    }
    .badge {
      position: absolute;
      top: -10px;
      right: 10px;
      background: var(--primary-600);
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 1rem;
      font-size: 0.75rem;
    }
    .local-link {
      color: var(--primary-600);
      font-weight: 500;
    }
  </style>