import {
    v4 as uuidv4
} from 'uuid';

export default {
    readList: function() {
        if (localStorage.getItem('todoList')) {
            return JSON.parse(localStorage.getItem('todoList'))
        } else
        return []
    },
    saveList: function(list) {
        localStorage.setItem('todoList', JSON.stringify(list))
    },
    addTask: function(taskText, taskRank) {
        const list = this.readList()
        list.push({
            id: uuidv4(),
            text: taskText,
            rank: taskRank,
        })
        this.saveList(list)
    },
    deleteTask: function(taskId) {
        const list = this.readList()
        list = list.filter(task=>task.id !== taskId)
    }
}