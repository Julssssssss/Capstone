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
            const token = jwt.sign(profile, process.env.JWT_ACCESS_SECRET)
            cb(null, token)
        }
    )
)
