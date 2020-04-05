const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    // price: {
    //     type: Number,
    //     required: true
    // },
    // description: {
    //     type: String,
    //     required: true
    // }
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = model('Product', schema)