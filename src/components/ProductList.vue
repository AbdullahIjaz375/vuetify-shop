<template>
  <div class="products-container">
    <!-- Iterate over products from Vuex store and display them -->
    <v-row>
      <v-col
        v-for="product in allProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <!-- Use the productItem component -->
        <product-item :product="product" @add-to-cart="addToCart" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// Import the productItem component
import ProductItem from "./ui/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  computed: {
    // Access products from Vuex store
    allProducts() {
      return this.$store.getters.allProducts;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>
