<template>
  <v-card color="black" class="product-card">
    <!-- Display product information -->
    <v-img
      class="product-image"
      cover
      height="250"
      :src="product.image"
    ></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>${{ product.price }}</v-card-subtitle>
    <v-card-text>{{ product.description }}</v-card-text>

    <!-- Add to cart button -->
    <v-card-actions>
      <v-btn color="white" @click="addToCart">Add to Cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  emits: ["add-to-cart"],
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.product);
    },
  },
};
</script>

<style scoped>
.product-card {
  max-width: 300px; /* Set maximum width for the product card */
  margin: 20px auto; /* Add some margin for spacing */
}

.product-card:hover {
  transform: scale(1.05); /* Enlarge the card when hovering over it */
}

.product-image {
  transition: transform 0.3s; /* Add transition for smooth effect */
}

.product-card:hover .product-image {
  transform: scale(1.1); /* Enlarge the image when hovering over the card */
}
</style>
