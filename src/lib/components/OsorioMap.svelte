<!-- src/lib/components/OsorioMap.svelte -->
<script lang="ts">
    export let zoom = 14;
    const center = "-29.8868,-50.2697"; // Osório/RS
</script>
  
<iframe
    src={`https://maps.google.com/maps?q=${center}&z=${zoom}&output=embed`}
    width="100%"
    height="300"
    style="border:0;"
    loading="lazy"
    title="Localização A. Caruso em Osório"
>
</iframe>