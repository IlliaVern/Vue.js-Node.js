<template>
    <div>
        <message-row v-for="msgItem in msgList" :key="msgItem.id" 
        :msg="msgItem" 
        @like="$emit('like',$event)" 
        @dislike="$emit('dislike', $event)" />
    </div>
</template>

<script>
    import MessageRow from './c/MessageRow';
    export default {
        name: "MessagesViewer",
        props: {
            msgList: {
                type: Array,
                required: true
            },
        },
        components: {
            MessageRow,
        },
    }
</script>

<style lang="scss" scoped>

</style>