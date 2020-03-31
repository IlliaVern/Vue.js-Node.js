<template>
  <div>
    <table>
      <tr v-for="product in products" :key="product.id">
        <td>{{product.title}}</td>
        <td>{{product.price}}</td>
        <td>
          <router-link :to="`/edit/${product.id}`">Edit</router-link>

          <button>Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "ProductsTable",
  data() {
    return {
      products: []
    };
  },
  methods: {
  },
  created() {
    this.products = store.readProducts();
  }
};
</script>

<style lang="scss" scoped>
</style>