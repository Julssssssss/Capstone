const express = require('express') //npm i express cors
const cors = require('cors')
const app = express(); //to use express
const port = 3000;
require('dotenv').config()

const passport = require('passport')
const cookieSession = require('cookie-session')

//passport.js file
const passportSetup =require('./comp/passport')
//routes
const authRoute = require("./routes/auth")

//mongoose db
const mongoose = require('mongoose')
const connectionString = `mongodb+srv://ADMIN:KTVVmRdf0AzoMW4F@lostandfounddb.lcqlpve.mongodb.net/`

//schemas
const itemModels = require('./Models/itemModels')

//to whitelist urls
const corsOptions =
    {
        origin:"http://localhost:4000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    }

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


app.get("/items", cors(corsOptions), (req, res)=>{
    itemModels.find({})
        .then(result=>{
            res.json(result)
        }
    ).catch(err=>{console.log(err)})
})

app.get('/items/:itemId', cors(corsOptions), async(req, res)=>{
    try {
        const item = await itemModels.findById(req.params.itemId);
        if (!item) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
})

app.use("/auth", cors(corsOptions), authRoute)


app.get('/db', cors(corsOptions), (req, res)=>{
    
})

app.use((req, res)=>{
    //if you made a mistake on typing the url
    res.status(404).send(`<h1>WRONG URL!</h1>`)
})