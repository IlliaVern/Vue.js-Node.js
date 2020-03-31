<template>
    <div>
        <span>Гравець 1</span><br>
        <span>Цифра <input type="number" v-model="player1Digit"></span><br>
        <button @click="makeMove" :disabled="!isNewDigit">Зробити хід</button>
    </div>
</template>

<script>
    export default {
        name: "PlayerOne",
        data() {
            return {
                player1Digit: ""
            }
        },
        methods: {
            makeMove(player1Digit) {
                
            }
        },
        computed: {
            isNewDigit() {
                return 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>