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

router.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: `${process.env.CLIENT_URL}/dashboard`,
        failureRedirect:"/login/failed",

    })
)
router.get("/google", passport.authenticate("google", ["email", "profile"]))

router.get("/logout", (req, res)=>{
    req.logout();
    res.redirect(process.env.CLIENT_URL)
})

module.exports = router