<template>
    <div>
        <label>
            Число: 
            <div v-for="(digit, index) in arr" :key="index">{{digit}}</div>
            

        </label>
    </div>
</template>

<script>
    export default {
        name: "RandomNumber",
        props: {
            arr: {
                type: Array,
                default: ()=>{}
            },
        },
        data() {
            return {
                
            }
        },
        computed: {
            // randomNumber() {
            //     this.number = Math.floor(Math.random()*100)
            // },
            splitRandomNumber() {
                this.arr = Math.floor(Math.random()*100).split('')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>