<template>
  <div>
    <label>
      Title
      <input type="text" v-model="title" />
    </label>
    <br />
    <label>
      Price
      <input type="text" v-model="price" />
    </label>
    <br />
    <button @click="saveProduct">{{saveButtonTitle}}</button>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "ProductEditor",
  data() {
    return {
      title: null,
      price: null
    };
  },
  computed: {
    productId() {
      return this.$route.params.productId;
    },
    saveButtonTitle() {
      return this.productId ? "Save" : "Add";
    }
  },
  methods: {
    saveProduct() {
      if (this.productId) {
        store.updateProduct({
          id: this.productId,
          title: this.title,
          price: this.price
        });
      } else {
        store.addProduct(this.title, this.price);
        this.title = null;
        this.price = null;
      }
      this.$router.push({ path: "/" });
    }
  },
  created() {
    if (this.productId) {
      const product = store.getProductById(this.productId);
      this.title = product.title;
      this.price = product.price;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>