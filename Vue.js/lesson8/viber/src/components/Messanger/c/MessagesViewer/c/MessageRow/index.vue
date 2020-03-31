<template>
    <div>
        <span>{{msg.text}}</span>
        <button @click="$emit('like',msg.id)">Like</button>
        <button @click="doDislike">Dislike</button>
        <span>Likes: {{msg.likesCount}}</span>
        

    </div>
</template>

<script>
    export default {
        name: "MessageRow",
        props: {
            msg: {
                type: Object,
                required: true
            },
        },
        methods: {
            doDislike() {
                this.$emit('dislike', this.msg.id)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>