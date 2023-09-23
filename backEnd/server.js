const express = require('express') //npm i express cors
const cors = require('cors')
const app = express(); //to use express
const port = 3000;
require('dotenv').config()

const passport = require('passport')
const cookieSession = require('cookie-session')
const sample = require('./sampledb.json')
//passport.js file
const passportSetup =require('./comp/passport')
//routes
const authRoute = require("./routes/auth")
//mongoose db
const mongoose = require('mongoose')
const connectionString = `mongodb+srv://ADMIN:<password>@lostandfounddb.lcqlpve.mongodb.net/`

mongoose.connect(`${connectionString}test`)
    .then((result)=>app.listen(port,()=> console.log(`running in port ${port}`))) //run the port in 3000
    .catch(err=>{console.log(err)})
    
app.use(
    cookieSession({
        name:"session",
        keys: ["LostAndFound"],
        maxAge: 24*60*60*100
    })
)
app.use(passport.initialize())
app.use(passport.session())

//schema model
const Schema = new mongoose.Schema({
    name:{ 
        type: String,
        required: true
    }
})
//saan model lalagay then lagay yung schema na ilalagay
const userModel = mongoose.model("users", Schema)

//to whitelist urls
const corsOptions =
    {
        origin:"http://localhost:4000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    }

app.get("/users", cors(corsOptions), (req, res)=>{
    res.json(userModel.find())
})

app.use("/auth", cors(corsOptions), authRoute)

app.get('/db', cors(corsOptions), (req, res)=>{
    res.json(sample)
})

app.use((req, res)=>{
    //if you made a mistake on typing the url
    res.status(404).send(`<h1>WRONG URL!</h1>`)
})