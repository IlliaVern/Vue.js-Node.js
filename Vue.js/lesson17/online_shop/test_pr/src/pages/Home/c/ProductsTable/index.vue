<template>
  <div>
    <b-table :data="getProductsList" :columns="columns">
      <template slot-scope="props">
        <b-table-column field="title">{{ props.row.title }}</b-table-column>
        <b-table-column field="price">{{ props.row.price }}</b-table-column>

        <b-table-column field="imgSrc">
          <figure class="image is-64x64">
            <img :src="props.row.imgSrc" />
          </figure>
        </b-table-column>

        <b-table-column>
          <div
            class=" button has-cursor-pointer"
            @click="onAddToCart(props.row.id)"
          >
            <b-icon pack="fas" icon="cart-plus" size="is-small"></b-icon>
          </div>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductsTable",

  data() {
    return {
      columns: [
        {
          label: "Title"
        },
        {
          label: "Price"
        },
        {
          label: "Image"
        }
      ]
    };
  },

  computed: {
    ...mapGetters("products", ["getProductsList"])
  },



  methods: {
    ...mapActions("cart", ["addProductToCart"]),

    onAddToCart(id) {
      this.addProductToCart(id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
