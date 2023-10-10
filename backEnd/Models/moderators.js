const mongoose = require('mongoose')
const schema = mongoose.Schema;

const moderatorSchema = new schema({
    _id:{
        type: String, 
        required: true
    },
    email:{
        type: String,
        required: true
    }
})
const moderatorModelo = mongoose.model("moderator", moderatorSchema)
module.exports = moderatorModelo