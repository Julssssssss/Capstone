const GoogleStrategy = require("passport-google-oauth20").Strategy
const passport =require('passport')

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
            scope:["profile"],
        },
        function (accessToken, refreshToken, profile, cb){
            console.log(profile)
            cb(null, profile)
        }
    )
)
