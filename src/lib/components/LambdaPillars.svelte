<!-- src/lib/components/LambdaPillars.svelte -->
<script lang="ts">
  const pillars = [
    { title: "Planejamento", icon: "📊" },
    { title: "Design", icon: "🎨" },
    { title: "Desenvolvimento", icon: "💻" }
  ];
</script>

<div class="pillars-container">
  <h2>Λ Nossa Abordagem</h2>
  <div class="pillars-grid">
    {#each pillars as pillar}
      <div class="pillar">
        <span class="icon">{pillar.icon}</span>
        <h3>{pillar.title}</h3>
      </div>
    {/each}
  </div>
</div>

<style>
  .pillars-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
</style>