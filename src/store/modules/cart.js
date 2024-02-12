// store/modules/cart.js
const state = {
  items: [],
  total: 0,
};

const getters = {
  cartItems: (state) => state.items,
  cartTotal: (state) => state.total,
};

const mutations = {
  addToCart(state, product) {
    const existingProduct = state.items.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      state.items.push({
        ...product,
        quantity: 1,
      });
    }
    state.total += product.price;

    console.log(state.items.length);
  },
  removeFromCart(state, productId) {
    const index = state.items.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const product = state.items[index];
      state.items.splice(index, 1);
      state.total -= product.price * product.quantity;
    }
  },
};

const actions = {
  addToCart({ commit }, product) {
    commit("addToCart", product);
  },
  removeFromCart({ commit }, productId) {
    commit("removeFromCart", productId);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
