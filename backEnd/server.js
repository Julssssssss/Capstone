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

app.use(
    cookieSession({
        name:"session",
        keys: ["LostAndFound"],
        maxAge: 24*60*60*100
    })
)
app.use(passport.initialize())
app.use(passport.session())

//to whitelist urls
const corsOptions =
    {
        origin:"http://localhost:4000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    }

app.use("/auth", cors(corsOptions), authRoute)

app.listen(port,()=> console.log(`running in port ${port}`)) //run the port in 3000

app.get('/db', cors(corsOptions), (req, res)=>{
    res.json(sample)
})

app.use((req, res)=>{
    //if you made a mistake on typing the url
    res.status(404).send(`<h1>WRONG URL!</h1>`)
})