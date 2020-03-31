<template>
  <div class="card has-max-width-400">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.imgSrc" alt="Placeholder image" />
      </figure>
    </div>
    <p class="card-header-title">{{product.title}}</p>

    <div class="content">
      <div>{{product.description}}</div>
      <div>
        <div class="card-footer is-pulled-left button is-success">${{product.price}}</div>
        <div
          class="button has-cursor-pointer is-pulled-right button is-success"
          @click="onAddToCart(product.id)"
        >
          <b-icon pack="fas" icon="cart-plus" size="is-small"></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  methods: {
    onAddToCart(id) {
      store.addProductToCart(id);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>