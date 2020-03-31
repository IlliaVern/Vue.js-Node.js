<template>
  <div id="app">

    <!-- используем компонент router-link для навигации -->
    <!-- входной параметр `to` определяет URL для перехода -->
    <!-- `<router-link>` по умолчанию отображается тегом `<a>` -->
      <div class="menu">
      <div>
        <router-link to="/">Усі товари</router-link>
      </div>
      <div>
        <router-link to="/create">Додати товар</router-link>
      </div>
      </div>
  <!-- отображаем тут компонент, для которого совпадает маршрут -->
  <router-view></router-view>
</div>
</template>

<script>
  
  export default {
    name: "App",
    components: {
      
    },
    data() {
      return {

      }
    },
  }
</script>

<style>
.menu {
  float: left;
  border: 2px solid black
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


