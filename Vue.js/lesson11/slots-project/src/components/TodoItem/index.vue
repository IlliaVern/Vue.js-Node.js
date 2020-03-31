<template>
    <div>
        <slot name="taskTitle" :titleData="task">
            <span>{{task.text}}</span>
        </slot>
        
        <slot name="taskActions">
            Hello
        </slot>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props: {
            task: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>