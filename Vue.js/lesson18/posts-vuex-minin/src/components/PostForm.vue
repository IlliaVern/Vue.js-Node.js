<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="Title" v-model="title" />
    <input type="text" placeholder="Body" v-model="body" />
    <button type="submit" :disabled="!filledPostInputs">Create Post</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      title: "",
      body: ""
    };
  },
  computed: {
    filledPostInputs() {
      return this.title && this.body;
    }
  },
  methods: {
    ...mapMutations(["createPost"]),
    submit() {
      this.createPost({
        id: Date.now(),
        title: this.title,
        body: this.body
      });
      this.title = this.body = "";
    }
  }
};
</script>


<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>