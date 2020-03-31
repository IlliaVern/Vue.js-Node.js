<template>
  <div id="app">
    
    <todo-item :task="task1">
      <template v-slot:taskTitle="{titleData}"><strong>{{titleData.text}}</strong></template>
      <template v-slot:taskActions>
        <b-button type="is-primary">Виконано</b-button>
        <button>Відкладено</button>
        <font-awesome-icon icon="user-secret" />
      </template>
    </todo-item>
    <hr />
    <todo-item :task="task2">
      <template v-slot:taskTitle><h1>Заголовок 2</h1></template>
      <template v-slot:taskActions>
        <b-switch :value="true" type="is-success">Success</b-switch>
      </template>
    </todo-item>
    <hr>
    <add-form />

    <hr><hr>
    <dollar-course :course="courseNbu">
      <template v-slot:whooseCourse="{courseData}"><span>{{courseData.issuer}}</span></template>
      <template v-slot:courseValue="{courseData}"><span>{{courseData.value}}</span></template>
    </dollar-course>
    <dollar-course :course="courseCommerce">
      <template v-slot:whooseCourse="{courseData}"><span>{{courseData.issuer}}</span></template>
      <template v-slot:courseValue="{courseData}"><span>{{courseData.value}}</span></template>
    </dollar-course>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem";
import AddForm from "./components/AddForm";
import DollarCourse from "./components/DollarCourse";



export default {
  name: "App",
  components: {
    DollarCourse,
    TodoItem,
    AddForm
  },
  data() {
    return {
      courseNbu: {
        issuer: "Нацбанк",
        value: 24.2
      },
      courseCommerce: {
        issuer: "Комерційний",
        value: 24.5
      },
      task1: {
        text: "Say Hello!"
      },
      task2: {
        text: "Wait!"
      }
    };
  }
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
