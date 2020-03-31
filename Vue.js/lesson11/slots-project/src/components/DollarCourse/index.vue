<template>
    <div>
        <slot name="whooseCourse" :courseData="course">
            <span>{{course.issuer}}</span>
        </slot>
        <slot name="courseValue" :courseData="course">
            <span>{{course.value}}</span>
        </slot><br>
        <slot name="howManyUsd">
            <span>Кількість долларів</span>
        </slot>
        <slot name="howManyUsdValue">
            <input type="number" v-model="convertToUsd">
        </slot><br>
        <slot name="howManyUah">
            <span>Кількість гривень</span>
        </slot>
        <slot name="howManyUahValue">
            <input type="number" :value="convertToUsd">
        </slot>
    </div>
</template>

<script>
    export default {
        name: "DollarCourse",
        props: {
            course: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>