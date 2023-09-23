const mongoose = require('mongoose')
const schema = mongoose.Schema;


const itemSchema = new schema({
    _id:{
        type: String,
        required: true
    },
    img:{
        type: String, 
        required: true
    },
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    founded:{
        type: String,
        required: true
    }
})
const itemModelo = mongoose.model("item", itemSchema)
module.exports = itemModelo

