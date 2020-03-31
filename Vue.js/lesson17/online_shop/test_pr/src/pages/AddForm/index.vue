<template>
  <div>
    <div>
      <b-field horizontal label="Title">
        <b-input type="text" v-model="title" required expanded></b-input>
      </b-field>
      <b-field horizontal label="Image SRC">
        <b-input type="text" v-model="imageSrc" required expanded></b-input>
      </b-field>
      <b-field horizontal label="Price">
        <b-input type="number" v-model="price" required expanded></b-input>
      </b-field>
      <b-field horizontal label="Description">
        <b-input type="textarea" v-model="description"></b-input>
      </b-field>
    </div>
    <div class="level">
      <b-button type="is-danger" class="level-left" @click="onCancel"
        >Cancel</b-button
      >
      <!-- <router-link to="/" class="button is-danger" >Cancel</router-link> -->
      <b-button
        type="is-success"
        class="level-right"
        :disabled="!isDataValid"
        @click="onAdd"
        >Add</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddForm",

  data() {
    return {
      title: null,
      imageSrc: null,
      price: null,
      description: null
    };
  },

  computed: {
    isDataValid() {
      return this.title && this.imageSrc && this.price > 0 && this.description;
    }
  },

  methods: {
    ...mapActions("products", ["addProduct"]),

    onAdd() {      
      this.addProduct({
        title: this.title,
        imgSrc: this.imageSrc,
        price: this.price,
        description: this.description
      });
    },
    onCancel() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
