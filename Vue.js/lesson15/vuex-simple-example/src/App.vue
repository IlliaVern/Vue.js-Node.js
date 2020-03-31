<template>
  <div id="app">
    <add-form/>
    <hr>
    <products-table/>
  </div>
</template>

<script>
import AddForm from './components/AddForm'
import ProductsTable from './components/ProductsTable'

export default {
  name: 'App',
  components: {
    AddForm,
ProductsTable
  }
}
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
