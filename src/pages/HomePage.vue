<template>
  <div>
    <TheHeader />
    <v-parallax src="/background-2.jpg">
      <v-container>
        <product-list></product-list>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import ProductList from "../components/ProductList.vue";
// import CartList from "../components/CartList.vue";

export default {
  name: "HomePage",
  components: {
    TheHeader,
    ProductList,
    // CartList,
  },
};
</script>
