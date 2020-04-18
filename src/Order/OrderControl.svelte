<script>
  export let qty = 0;
  export let focus = false;

  function minusHandler() {
    if (qty > 0) {
      qty -= 1;
    }
  }

  function plusHandler() {
    qty += 1;
  }
</script>

<style>
  section {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    user-select: none;
  }

  div {
    position: relative;
    display: block;
    font-size: 3em;
    color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: ease-out 0.1s;
  }

  div.focus {
    height: 65%;
  }

  div.invisible {
    visibility: hidden;
  }

  span {
    position: absolute;
    display: block;
    transform: translateY(-50%);
    top: 50%;
    left: 0px;
    width: 100%;
  }

  button {
    position: absolute;
    height: 35%;
    width: 50%;
    bottom: -100%;
    margin: 0;
    padding: 0;
    border: none;
    border-radius: 0px;
    font-size: 2em;
    color: #fff;
    transition: ease-out 0.1s;
  }

  button.focus {
    bottom: 0px;
  }

  .minus {
    left: 0px;
    background: rgba(19, 31, 99, 0.6);
  }

  .plus {
    right: 0px;
    background: rgba(19, 31, 150, 0.8);
  }
</style>

<section>
  <div class:focus class:invisible={qty === 0 && !focus}>
    <span>{qty === 0 ? '-' : qty}</span>
  </div>
  <button class="minus" class:focus on:click|stopPropagation={minusHandler}>
    -
  </button>
  <button class="plus" class:focus on:click|stopPropagation={plusHandler}>
    +
  </button>
</section>
