const mongoose = require('mongoose')
const schema = mongoose.Schema;


const userSchema = new schema({
    _id:{
        type: String,
        required: true
    },
    email:{
        type: String, 
        required: true
    },
    secQ1:{
        type: String,
        required: true
    },
    secQ2:{
        type: String,
        required: true
    }
})
const userModelo = mongoose.model("item", userSchema)
module.exports = userModelo

