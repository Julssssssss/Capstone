const express = require('express') //npm i express cors
const cors = require('cors')
const app = express(); //to use express
const port = 3000;
require('dotenv').config
const sample = [require('./sampledb.json')]

app.use(cors()) //to allow everyone access the cors will change later 

app.listen(port, console.log(`running in port ${port}`)) //run the port in 3000

app.get('/db', (req, res)=>{
    res.json(sample)
    console.log(res)
})

app.use((req, res)=>{
    //if you made a mistake on typing the url
    res.status(404).send(`<h1>WRONG URL!</h1>`)
})