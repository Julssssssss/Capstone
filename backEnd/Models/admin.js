const mongoose = require('mongoose')
const schema = mongoose.Schema;

const adminSchema = new schema({
    _id:{
        type: String, 
        required: true
    },
    email:{
        type: String,
        required: true
    }
})
const adminModelo = mongoose.model("admin", adminSchema)
module.exports = adminModelo