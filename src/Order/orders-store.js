import { writable, readable } from "svelte/store";
import itemStore from "../Item/items-store.js";

const orders = writable([]);

export const ordersStore = {
  subscribe: orders.subscribe,
  updateOrder: function (id, qty) {
    orders.update(function (old) {
      // Initialize found flag
      let found = false;

      const orders = old
        .map(function (order) {
          // Only qty if id is same
          if (order.itemId === id) {
            found = true;
            order.qty = qty;
          }

          return order;
        })
        .filter((order) => order.qty > 0);

      if (found || qty === 0) {
        return orders;
      } else {
        // Add new object to array as id is never inserted before
        return [
          ...orders,
          {
            itemId: id,
            qty,
          },
        ];
      }
    });
  },
};

export const orderItemsStore = readable([], function start(set) {
  let ordersData;
  let itemsData;

  function updateOrderItems() {
    // Exit when some data is still undefined
    if (!ordersData || !itemsData) {
      return;
    }

    const orderItems = ordersData
      .map(function (order) {
        // Find item object by id
        const item = itemsData.find((item) => item.id === order.itemId);

        if (!item) return null;

        return {
          ...item,
          qty: order.qty,
          total: order.qty * item.price,
        };
      })
      .filter((order) => order);

    set(orderItems);
  }

  // update ordersData and call updateOrderItems when ordersStore updated
  ordersStore.subscribe((data) => {
    ordersData = data;
    updateOrderItems();
  });

  // update ordersData and call updateOrderItems when itemStore updated
  itemStore.subscribe((data) => {
    itemsData = data;
    updateOrderItems();
  });
});
