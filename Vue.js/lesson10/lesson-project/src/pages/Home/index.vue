<template>
  <div class="columns">
    <div class="column has-margin-50"> Home
      <b-button type="is-success" @click="onMyClick">Success</b-button>
    </div>
    <div class="column">Column 2</div>
    <div class="column">Column 3</div>

  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    onMyClick() {
      this.$buefy.dialog.alert("Congratulations!!!");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>