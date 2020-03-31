<template>
  <div>
    <div class="columns">
      <div class="column is-half">
        <b-field horizontal label="First Name">
          <b-input name="first name" placeholder="First name" expanded></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field horizontal label="Last Name">
          <b-input name="last name" placeholder="Last name" expanded></b-input>
        </b-field>
      </div>
      <div class="column">
          <b-field horizontal label="Age">
          <b-input name="age" placeholder="Age" expanded></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field horizontal label="Password">
          <b-input name="password" placeholder="Password" expanded></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field horizontal label="Confirm">
          <b-input name="confirm" placeholder="Confirm" expanded></b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddForm"
};
</script>

<style lang="scss" scoped>
</style>