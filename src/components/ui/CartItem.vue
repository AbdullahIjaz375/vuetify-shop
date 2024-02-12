<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ item.name }}</v-list-item-title>
      <v-list-item-subtitle>Quantity: {{ item.quantity }}</v-list-item-subtitle>
      <v-list-item-subtitle>Price: ${{ item.price }}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn @click="removeFromCart" color="error">Remove</v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch("removeFromCart", this.item.id); // Ensure correct action name and pass the product id
    },
  },
};
</script>
