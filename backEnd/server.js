const express = require('express') //npm i express cors
const cors = require('cors')
const app = express(); //to use express
const port = 3000;
const bodyParser = require('body-parser');
require('dotenv').config()

const protRoute = require('./routes/protected')

const passport = require('passport')

//passport.js file
const passportSetup =require('./comp/passport')
//routes
const authRoute = require("./routes/auth")
const adminRoute = require("./routes/admin")

//session para sa google oauth
const session = require("cookie-session")

//for cookie req
const cookieParser = require('cookie-parser')

//mongoose db
const mongoose = require('mongoose')
const connectionString = `mongodb+srv://ADMIN:KTVVmRdf0AzoMW4F@lostandfounddb.lcqlpve.mongodb.net/`

//jwt 
const jwt =require('jsonwebtoken')

//to whitelist urls
const corsOptions =
    {
        origin:"http://localhost:4000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    }

app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser())

mongoose.connect(`${connectionString}test`)
    .then((result)=>app.listen(port,()=> console.log(`running in port ${port}`))) //run the port in 3000
    .catch(err=>{console.log(err)})

//use session
app.use(session({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    // Cookie expiration date
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))    
    
app.use(passport.initialize())
app.use(passport.session())


app.use("/auth", authRoute)

app.use("/prot", protRoute)

app.use("/priv", adminRoute)

app.use((req, res)=>{
    //if you made a mistake on typing the url
    res.status(404).send(`<h1>WRONG URL!</h1>`)
})