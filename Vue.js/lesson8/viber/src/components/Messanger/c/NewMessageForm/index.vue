<template>
    <div>
        <input type="text" v-model="newMessage"
        placeholder="Type new message">
        <button @click="sendMsg">Send</button>
    </div>
</template>

<script>
    export default {
        name: "NewMessageForm",
        data() {
            return {
                newMessage: null
            }
        },
        methods: {
            sendMsg() {
                this.$emit('add-msg', this.newMessage)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>