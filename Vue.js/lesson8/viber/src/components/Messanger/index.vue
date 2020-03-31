<template>
    <div>
        <messages-viewer :msgList="msgListData" 
        @like="addLike"
        @dislike="minusLike"
        />
        <new-message-form @add-msg="onAddMsg" />
        <!-- {{msgListData}} -->
    </div>
</template>

<script>
import msgListData from '@/constants/msgList.js';
import MessagesViewer from './c/MessagesViewer';
import NewMessageForm from './c/NewMessageForm';
import { v4 as uuidv4 } from 'uuid';
    export default {
        name: "Messanger",
        
        components: {
            MessagesViewer,
            NewMessageForm
        },
        data() {
            return {
                msgListData
            }
        },
        methods: {
            addLike(id) {
                const index = this.msgListData.findIndex(item=>item.id===id)
                // Vue.set()
                this.msgListData[index].likesCount++
                this.msgListData=[...this.msgListData]
            },
            minusLike(id) {
                const index = this.msgListData.findIndex(item=>item.id===id)
                this.msgListData[index].likesCount--
                this.msgListData=[...this.msgListData]
            },
            onAddMsg(newMsg) {
                this.msgListData.push({
                    id: uuidv4(),
                    text: newMsg,
                    likesCount: 0
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>