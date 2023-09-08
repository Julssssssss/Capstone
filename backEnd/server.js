const express = require('express') //npm i express cors
const cors = require('cors')
const app = express(); //to use express
const port = 3000;
require('dotenv').config()
const passport = require('passport')
const cookieSession = require('cookie-session')
const sample = require('./sampledb.json')
const passportSetup =require('./comp/passport')
const authRoute = require("./routes/auth")

app.use(
    cookieSession({
        name:"session",
        keys: ["cyberwolve"],
        maxAge: 24*60*60*100
    })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
})) //to allow everyone access the cors will change later 

app.use("/auth", authRoute)

app.listen(port, console.log(`running in port ${port}`)) //run the port in 3000

app.get('/', (req, res)=>{
    res.send('<a href="/auth/google">Authenticate with Google</a>')
})

app.get('/protected', (req, res)=>{
    res.send('<h1>Hello!</h1>')
})

app.get('/db', (req, res)=>{
    res.json(sample)
    console.log(res)
})

app.use((req, res)=>{
    //if you made a mistake on typing the url
    res.status(404).send(`<h1>WRONG URL!</h1>`)
})