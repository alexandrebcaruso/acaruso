<!-- src/lib/components/ServiceCard.svelte -->
<script lang="ts">
    export let service: {
      title: string;
      description: string;
      icon: string;
      href: string;
    };
  </script>
  
  <a href={service.href} class="card">
    <div class="icon">{service.icon}</div>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </a>
  
  <style>
    .card {
      border: 1px solid #e5e7eb;
      padding: 1.5rem;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .icon {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  </style>