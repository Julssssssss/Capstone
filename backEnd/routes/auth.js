const router =require("express").Router()
const passport = require("passport")
const jwt = require('jsonwebtoken')

let refreshTokens = []

function generateAccessToken(user){
    return jwt.sign(user, process.env.JWT_ACCESS_SECRET, {expiresIn: '10m'})
}

router.post('/refreshToken', (req, res)=>{
    const refreshToken =req.body.token
    if(refreshToken == null) return res.status(401)
    if (!refreshTokens.includes(refreshToken)) return res.status(403)
    jwt.verify (refreshToken, process.env.JWT_REFRESH_SECRET, (err, user)=>{
        if(err) return res.status(403)
        const accessToken = generateAccessToken(//ginawa to para hindi maget yung ias
        { 
            name: user.name,
            picture: user.picture,
            email: user.email
        })
        res.json({ accessToken: accessToken})
    })
})

router.get("/login/success", (req, res)=>{
    if(req.user){
        const user = req.user
        const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_SECRET) 
        refreshTokens.push(refreshToken)
        const accessToken=generateAccessToken(user)

        res.status(200).json({
            error:false,
            message:"Success",
            accessToken: accessToken,
            refreshToken: refreshToken
            
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
        failureRedirect:"/login/failed",

    })
)
router.get("/google", passport.authenticate("google", ["email", "profile"]))

router.get("/logout", (req, res)=>{
    req.logout();
    res.redirect(process.env.CLIENT_URL)
})

module.exports = router