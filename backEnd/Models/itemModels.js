const mongoose = require('mongoose')
const schema = mongoose.Schema;


const itemSchema = new schema({
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
const itemModelo = mongoose.model("items", itemSchema)
module.exports = itemModelo

