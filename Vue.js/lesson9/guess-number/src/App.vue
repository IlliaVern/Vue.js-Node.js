<template>
  <div id="app">
  </div>
</template>

<script>
import RandomNumber from '@/components/GuessNumber'

export default {
  name: 'App',
  components: {
    RandomNumber
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
