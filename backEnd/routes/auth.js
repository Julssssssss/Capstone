const router =require("express").Router()
const passport = require("passport")
//schemas
const itemModels = require('../Models/itemModels')
const adminModels = require('../Models/admin')
const moderatorModels = require('../Models/moderators')

//database dapat to pero dito muna for testing

router.get('/items/:itemId', async(req, res)=>{
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

router.get("/items", (req, res)=>{
    itemModels.find({})
        .then(result=>{
            res.status(200).json({
                items: result
            })
        }
    ).catch(err=>{console.log(err)})
})

router.get("/login/success", (req, res)=>{
    if(req.user){
        const {name, picture, email} = req.user
        const user = {name, picture, email}
        res.status(200).json({
            error:false,
            message:"Success",
            user: user
        })
    }
    else{
        res.status(403).json({
            error: true,
            message:"Not Authorized"
        })
    }
})

router.get("/login/failed", (req, res)=>{
    res.status(401).json({
        error:true,
        message:"Log in failure"
    })
})

router.get("/google/callback", (req, res, next) => {
    const user = req.user
    let adminDb = [null]
    let modDb = [null]
    const getAdmin = async()=>{
        try {
            const result = await adminModels.find({})
                adminDb = [result[0]]
        } catch (err) {
            console.log(err)
        }
    }
    const getMod = async()=>{    
        try {
            const result = await moderatorModels.find({})
                modDb = [result[0]]
        } catch (err) {
            console.log(err)
        }
    }
    getAdmin()
    getMod()

    console.log(modDb)    
    let redirect = null;
    let role = 'admin'

    if (role === 'admin') {
        redirect = `${process.env.CLIENT_URL}/admin`;
    } else if (role === 'user') {
        redirect = `${process.env.CLIENT_URL}/dashboard`;
    }
    else{
        redirect= `${process.env.CLIENT_URL}/404`
    }

    passport.authenticate("google", {
        successRedirect: redirect,
        failureRedirect: "/login/failed"
    })(req, res, next); // <-- This is where passport.authenticate is being called
});

router.get("/google", passport.authenticate("google", ["email", "profile"]))

router.get("/logout", (req, res)=>{
    req.logout();
    res.redirect(process.env.CLIENT_URL)
})

module.exports = router