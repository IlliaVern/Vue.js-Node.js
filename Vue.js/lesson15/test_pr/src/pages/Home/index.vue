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
      viewState: "cards"
    };
  }
};
</script>

<style lang="scss" scoped></style>
