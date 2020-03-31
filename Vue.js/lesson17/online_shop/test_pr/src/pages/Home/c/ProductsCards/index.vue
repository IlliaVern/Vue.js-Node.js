<template>
  <div class="columns">
    <div v-for="product in products" :key="product.id" class="column">
      <product-card :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "./c/ProductCard";
import store from "@/store";
export default {
  name: "ProductsCards",
  components: {
    ProductCard
  },

  computed: {
    products() {
      return store.readList();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>