import { writable } from "svelte/store";

const items = writable([
  {
    id: 1,
    name: "Fried Salmon",
    imageUrl: "/pictures/fried_salmon.jpg",
    category: "Food",
    price: 42000,
  },
  {
    id: 2,
    name: "Teriyaki Salmon",
    imageUrl: "/pictures/teriyaki_salmon.jpg",
    category: "Food",
    price: 53000,
  },
  {
    id: 3,
    name: "Snow Pancake",
    imageUrl: "/pictures/snow_pancake.jpg",
    category: "Food",
    price: 46000,
  },
  {
    id: 4,
    name: "Green Burger",
    imageUrl: "/pictures/green_burger.jpg",
    category: "Food",
    price: 37000,
  },
  {
    id: 5,
    name: "Ice Berries Cake",
    imageUrl: "/pictures/ice_berries_cake.jpg",
    category: "Food",
    price: 49000,
  },
  {
    id: 6,
    name: "Cold Mocha",
    imageUrl: "/pictures/cold_mocha.jpg",
    category: "Drink",
    price: 26000,
  },
  {
    id: 7,
    name: "Pink Capuccino",
    imageUrl: "/pictures/pink_capuccino.jpg",
    category: "Drink",
    price: 29000,
  },
  {
    id: 8,
    name: "Iced Lemonade",
    imageUrl: "/pictures/iced_lemonade.jpg",
    category: "Drink",
    price: 12000,
  },
]);

const itemsStore = {
  subscribe: items.subscribe,
};

export default itemsStore;
