// store/modules/products.js
const state = {
  products: [
    {
      id: 1,
      name: "Smartphone",
      price: 499,
      description: "A high-quality smartphone with advanced features.",
      image: "/phone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: 1099,
      description: "A powerful laptop for work and entertainment.",
      image: "/laptop-1.jpg",
    },
    {
      id: 3,
      name: "Headphones",
      price: 149,
      description: "Wireless headphones with noise-canceling technology.",
      image: "/headphones.jpg",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 299,
      description: "A stylish smartwatch with fitness tracking capabilities.",
      image: "/watch_1.jpg",
    },
    {
      id: 5,
      name: "Camera",
      price: 799,
      description:
        "A professional camera for capturing high-quality photos and videos.",
      image: "/camera.jpg",
    },
    {
      id: 6,
      name: "Tablet",
      price: 349,
      description: "A versatile tablet for productivity and entertainment.",
      image: "/tablet.jpg",
    },
    {
      id: 7,
      name: "Wireless Speaker",
      price: 89,
      description: "Portable wireless speaker with rich sound quality.",
      image: "/speaker.jpg",
    },
    {
      id: 8,
      name: "Gaming Console",
      price: 399,
      description: "Immersive gaming console for hours of entertainment.",
      image: "/gaming-console.jpg",
    },
    {
      id: 9,
      name: "Fitness Tracker",
      price: 129,
      description:
        "Track your fitness goals with this advanced fitness tracker.",
      image: "/fitness-tracker.jpg",
    },
    {
      id: 10,
      name: "Bluetooth Earbuds",
      price: 79,
      description: "True wireless earbuds for on-the-go convenience.",
      image: "/airpods.jpg",
    },
  ],
};

const getters = {
  allProducts: (state) => state.products,
};

export default {
  state,
  getters,
};
