<template>
  <div>
    <b-select v-model="viewState">
      <option v-for="option in viewStates" :value="option" :key="option">{{ option}}</option>
    </b-select>

    <products-cards v-if="viewState=='cards'" />
    <products-table v-else />
    
  </div>
</template>

<script>
import { mapActions } from "vuex";

import ProductsTable from "./c/ProductsTable";
import ProductsCards from "./c/ProductsCards";

export default {
  name: "Home",
  components: {
    ProductsTable,
    ProductsCards
  },

  data() {
    return {
      viewStates: ["cards", "table"],
      viewState: "table"
    };
  },

  methods: {
       ...mapActions("cart", ["loadCart"]),
       ...mapActions("products", ["loadProductList"]),

  },

  mounted () {
    this.loadProductList()
    this.loadCart()
  },
};
</script>

<style lang="scss" scoped></style>
