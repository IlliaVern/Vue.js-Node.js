<template>
  <div id="app">
    <messanger @addcounter="onAdd" />
  </div>
</template>

<script>
import Messanger from '@/components/Messanger'

export default {
  name: 'App',
  components: {
    Messanger
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    onAdd(arg) {
      this.count+= arg
    }
  },
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
