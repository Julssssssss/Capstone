const mongoose = require('mongoose')
const schema = mongoose.Schema;


const refreshTokensSchema = new schema({
    refreshToken:{
        type: String, 
        required: true
    }
})
const refreshTokensModelo = mongoose.model("refreshTokens", refreshTokensSchema)
module.exports = refreshTokensModelo