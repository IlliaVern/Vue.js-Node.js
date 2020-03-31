<template>
  <table>
    <tr>
      <th>№ п/п</th>
      <th>
        ПІБ
        <input type="text" v-model="searchName" />
      </th>
    </tr>
    <students-row
      v-for="(student, index) in filteredStudentsList"
      :key="index"
      :studentNumber="index+1"
      :studentName="student"
    />
  </table>
</template>

<script>
import StudentsRow from "./components/StudentsRow";
export default {
  name: "StudentsViewer",
  components: {
    StudentsRow
  },
  props: {
    studentsList: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      searchName: ""
    };
  },
  computed: {
    filteredStudentsList() {
      if (this.searchName)
        return this.studentsList.filter(el => el.includes(this.searchName));
      else return this.studentsList;
    }
  }
};
</script>

<style lang="css" scoped>
table, tr, th {
    border: 2px solid black;
}
</style>