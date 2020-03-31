<template>
    <div>
        <div>
            Title: <input type="text" v-model="title">
        </div>
        <div>
            Price: <input type="number" v-model="price">
        </div>        
        <button @click="onAdd">Add</button>

    </div>
</template>

<script>

import { mapActions } from "vuex";
    export default {
        name:"AddForm",

        data() {
            return {
                title: null,
                price:null
            }
        },

        methods: {
            ...mapActions(['saveProduct']),
            onAdd() {
                this.saveProduct({title:this.title,price:this.price})
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>