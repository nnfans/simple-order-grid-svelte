<script context="module">
  export let focusId = null;

  export let unfocus = () => null;
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { backOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { ordersStore } from "./orders-store.js";
  import { formatToKilo } from "../helpers/transformer.js";

  import Clearfix from "../UI/Clearfix.svelte";
  import OrderControl from "./OrderControl.svelte";

  export let id;
  export let name;
  export let price;
  export let imageUrl;
  export let index;
  let active = false;
  export let qty = 0;

  $: ordersStore.updateOrder(id, qty);

  const styleActive = "--filter: blur(2px) brightness(0.8)";

  function toggleFocus() {
    const focused = focusId;
    unfocus();

    if (focused === id) {
      return;
    }
    focusId = id;
    active = "2px";

    unfocus = function() {
      focusId = null;
      active = null;
    };
  }
</script>

<style>
  li {
    display: block;
    width: 46%;
    height: 100%;
    margin: 1rem 2%;
    overflow: hidden;
  }

  .image-container {
    width: 100%;
    padding-bottom: 75%;
    overflow: hidden;
    position: relative;
  }

  img {
    object-fit: cover;
    position: absolute;
    display: block;
    width: 100%;
    filter: var(--filter);
    transition: ease-out 100ms;
  }

  section {
    margin-top: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  h3 {
    font-family: "Baloo 2";
    font-weight: 500;
    font-size: 1.2rem;
    margin: 0;
  }

  span {
    font-weight: bold;
    color: #777;
  }

  .bottom-line {
    width: 100%;
    height: 0.1rem;
    background: #ccc;
    margin-top: 0.4rem;
  }

  @media (min-width: 700px) {
    li {
      width: 30%;
      margin: 1rem 1.5%;
    }
  }

  @media (min-width: 1000px) {
    li {
      width: 23%;
      margin: 1rem 1%;
    }
  }

  @media (min-width: 1400px) {
    li {
      width: 19%;
      margin: 1rem 0.5%;
    }
  }
</style>

<li
  on:click|stopPropagation={toggleFocus}
  in:fly={{ y: 20, delay: index * 60, easing: backOut }}
  style={active || qty !== 0 ? styleActive : ''}>
  <div class="image-container">
    <img src={imageUrl} alt={name} />
    <OrderControl bind:qty focus={active} />
  </div>
  <section>
    <h3>{name}</h3>
    <span>{formatToKilo(price)}</span>
  </section>
  <Clearfix />
  <div class="bottom-line" />
</li>
