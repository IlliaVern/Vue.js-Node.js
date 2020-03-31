<template>
  <div id="app">
    <!-- Навігаційна панель -->
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/create' }">Add product</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/edit' }">Edit product</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <b-icon pack="fas" icon="shopping-cart" size="is-small"></b-icon>
          <b-tag type="is-info is-rounded">{{cartLenght}}</b-tag>
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <!-- Місце вставки сторінок -->
    <router-view></router-view>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "App",

  computed: {
    cartLenght() {
      return store.getProductsCountInCart()
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
