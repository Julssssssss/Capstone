const GoogleStrategy = require("passport-google-oauth20").Strategy
const passport =require('passport')
const jwt = require('jsonwebtoken')

passport.serializeUser((user, done)=>{
    done(null, user)
})
passport.deserializeUser((user, done)=>{
    done(null, user)
})

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            scope:["email", "profile"],
        },
        function (accessToken, refreshToken, profile, cb){
            const {name, picture, email} = profile._json
            const user = {name, picture, email}
            const token = jwt.sign(user, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'})
            cb(null, token)
        }
    )
)
