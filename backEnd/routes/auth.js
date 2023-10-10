const router =require("express").Router()
const passport = require("passport")
//schemas
const itemModels = require('../Models/itemModels')

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

router.get("/login/success", (req, res)=>{
    if(req.user){
        const user = req.user

        itemModels.find({})
            .then(result=>{
                res.status(200).json({
                    error:false,
                    message:"Success",
                    user: user,
                    items: result
                })
            }
        ).catch(err=>{console.log(err)})
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
    const { role } = req.user;
    let redirect = null;

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