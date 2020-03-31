<template>
    <div>
        User name: <input type="text" v-model="name">
        <button @click="onClick"> Say Hi </button>
        <div>{{message}}</div>
    </div>
</template>
<script>
    export default {
        name:"Greater",
        data() {
            return {
                name: null,
                message:null
            }
        },
        methods: {
            onClick() {
                this.message=`Hi ${this.name}`
            }
        },
    }
</script>
<style lang="scss" scoped>
</style>