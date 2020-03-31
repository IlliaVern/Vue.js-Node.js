<template>
  <div id="app">
    <greater/>
  </div>
</template>

<script>
import Greater from './components/Greater'

export default {
  name: 'App',
  components: {
    Greater
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
