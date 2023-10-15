const router =require("express").Router()
const passport = require("passport")
const jwt = require('jsonwebtoken')

let refreshTokens = []

router.post('/refreshToken', (req, res)=>{
    const refreshToken =req.cookies
    if(!refreshToken?.jwt) return res.sendStatus(401)
    //if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify (refreshToken.jwt, process.env.JWT_REFRESH_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        const {_id, Name, Email, Role}=user
        const data = {_id, Name, Email, Role}
        const accessToken = jwt.sign(data, process.env.JWT_ACCESS_SECRET)
        res.json({ accessToken: accessToken})
    })
})

router.get("/login/success", (req, res)=>{
    if(req.user){
        const {accessToken, refreshToken, role} = req.user
        
        //send as http only para hindi maaccess through javascript
        res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 *60 * 1000 })

        res.status(200).json({
            error:false,
            message:"Success",
            accessToken: accessToken,
            role : role
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

router.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: `${process.env.CLIENT_URL}`,
        failureRedirect: `/login/failed`,

    })
)
router.get("/google", passport.authenticate("google", ["email", "profile"]))

router.get("/logout", (req, res)=>{
    const refreshToken =req.cookies
    if (refreshTokens.includes(refreshToken)) refreshTokens.splice(refreshTokens.indexOf(refreshToken), 1)
    req.logout();
    res.redirect(process.env.CLIENT_URL)
})

module.exports = router