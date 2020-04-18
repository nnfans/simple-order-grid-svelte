<script>
  import OrderGrid from "./Order/OrderGrid.svelte";
  import OrderBar from "./Order/OrderBar.svelte";
</script>

<style>
  main {
    user-select: none;
  }
</style>

<main>
  <OrderGrid />
  <OrderBar />
</main>
