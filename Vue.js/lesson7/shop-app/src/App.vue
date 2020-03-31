<template>
  <div> 
    
        <img :src="imgPath" alt="">

        <hr>
        <products-viewer/>
  </div>
</template>

<script>
import ProductsViewer from "@/components/ProductsViewer";

export default {
  name: "App",
  components: {
    ProductsViewer,
  },

  data() {
    return {
      
    };
  },

  computed: {
    imgPath() {
      return require("@/assets/images/notes/_1.jpg")
    }
  },
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
