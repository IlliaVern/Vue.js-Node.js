<template>
    <tr>
        <td>{{studentNumber}}</td>
        <td>{{studentName}}</td>
    </tr>
</template>

<script>
    export default {
        name: "StudentsRow",
        props: {
            studentNumber: {
                type: Number,
            },
            studentName: {
                type: String,
            }
        },
    }
</script>

<style lang="css" scoped>
    tr, td {
        border: 2px solid black
    }
</style>