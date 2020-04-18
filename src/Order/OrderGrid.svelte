<script>
  import { onMount } from "svelte";
  import itemStore from "../Item/items-store.js";
  import OrderItem, { focusId, unfocus } from "./OrderItem.svelte";

  let items = [];

  let categories = ["Food", "Drink"];

  onMount(function() {
    let unsub;
    setTimeout(() => {
      unsub = itemStore.subscribe(newItems => (items = newItems));
    }, 200);

    return unsub;
  });

  function unselect() {
    unfocus();
  }
</script>

<style>
  .main {
    margin-top: 1rem;
    margin-right: 3rem;
  }

  article {
    margin-bottom: 1rem;
  }

  .header {
    display: flex;
    align-items: center;
    margin: 0 2%;
  }

  .header,
  .items {
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  }

  h2 {
    font-size: 2rem;
  }

  .line {
    position: relative;
    flex-grow: 1;
    height: 1px;
    background: #888;
    margin-left: 20px;
    margin-top: -3px;
  }

  .line::after {
    position: absolute;
    display: block;
    background: #888;
    content: "";
    top: 6px;
    left: 0;
    height: 200%;
    width: 100%;
  }

  @media (min-width: 700px) {
    main {
      padding: 0 0.5rem;
    }
    .header {
      margin: 0 1.5%;
    }
  }

  @media (min-width: 1000px) {
    .header {
      margin: 0 1%;
    }
  }

  @media (min-width: 1400px) {
    .header {
      margin: 0 0.5%;
    }
  }
</style>

<section class="main" on:click={unselect}>
  {#each categories as category}
    <article>
      <section class="header">
        <h2>{category}</h2>
        <div class="line" />
      </section>
      <ul class="items">
        {#each items.filter(it => it.category === category) as item, ix}
          <OrderItem {...item} index={ix} />
        {/each}
      </ul>
    </article>
  {/each}
</section>
