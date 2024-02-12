<template>
  <nav>
    <v-toolbar color="black" dark>
      <!-- Use a grid container to align items -->
      <v-row align="center">
        <!-- Center-aligned title -->
        <v-col>
          <v-toolbar-title class="text-center">
            <span class="font-weight-light">My</span>
            <span>Shop</span>
          </v-toolbar-title>
        </v-col>
        <!-- Right-aligned shopping cart button -->
        <v-col class="text-right" cols="auto">
          <v-btn
            @click="overlay = !overlay"
            class="shopping-cart"
            style="background-color: rgb(141, 40, 141)"
          >
            <span>Shopping Cart</span>
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <v-overlay v-model="overlay" :scrollable="true">
            <v-card>
              <cart-item-list></cart-item-list>
            </v-card>
          </v-overlay>
        </v-col>
      </v-row>
    </v-toolbar>
  </nav>
</template>

<script>
import CartItemList from "../components/CartItemList.vue";

export default {
  name: "TheHeader",
  components: {
    CartItemList,
  },
  data() {
    return {
      overlay: false, // Add overlay data property
    };
  },
};
</script>

<style scoped>
.shopping-cart {
  background-color: #ffffff; /* Set initial background color */
  transition: background-color 0.3s ease; /* Add transition for smooth effect */
}

.shopping-cart:hover {
  background-color: #f0f0f0; /* Change background color on hover */
}

/* Adjust the position of the column containing the button */
.text-right {
  margin-right: 20px; /* Adjust the margin to move the button to the left */
}
</style>
