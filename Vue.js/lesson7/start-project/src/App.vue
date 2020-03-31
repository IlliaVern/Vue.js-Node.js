<template>
  <div>
    <students-viewer :studentsList="students"/>
  </div>
</template>

<script>
  import StudentsViewer from './components/StudentsViewer';
  
  export default {
    name: "App",
    components: {
      StudentsViewer
    },
    data() {
      return {
              students: ["Іванов І.І", "Петров П.П.", "Степанов С.С.", "Воронін А.С."]
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


