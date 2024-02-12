<!-- CartItemList.vue -->
<template>
  <v-list two-line>
    <cart-item v-for="item in items" :key="item.id" :item="item"></cart-item>
  </v-list>
  <div>Total: ${{ total }}</div>
</template>

<script>
import CartItem from "./ui/CartItem.vue";

export default {
  components: {
    CartItem,
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
  },
};
</script>
