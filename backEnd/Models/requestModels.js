const mongoose = require('mongoose')
const schema = mongoose.Schema;


const reqSchema = new schema({
    itemId:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    Email:{
        type: String, 
        required: true
    }
})
const reqModelo = mongoose.model("Request", reqSchema)
module.exports = reqModelo

