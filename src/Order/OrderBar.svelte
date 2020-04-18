<script>
  import { onDestroy } from "svelte";
  import { orderItemsStore } from "./orders-store.js";
  import { formatToKilo } from "../helpers/transformer.js";

  let orderItems = [];

  const unsub = orderItemsStore.subscribe(data => {
    orderItems = data;
  });

  onDestroy(() => {
    unsub();
  });

  $: total = orderItems.reduce((prev, curr) => prev + curr.total, 0);
</script>

<style>
  section {
    display: block;
    position: fixed;
    width: 3rem;
    height: 100%;
    right: 0px;
    top: 0px;
    background: #263a80;
    color: #ffffff;
  }

  ul {
    height: calc(100% - 2em);
  }

  li {
    padding: 10px 0;
    text-align: center;
  }

  span {
    display: block;
    text-align: center;
  }

  li:nth-child(even) {
    background: #001c80;
  }
</style>

<section>
  <ul>
    {#each orderItems as orderItem}
      <li>{formatToKilo(orderItem.total)}</li>
    {/each}
  </ul>
  <span>{formatToKilo(total)}</span>
</section>
