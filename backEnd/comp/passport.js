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
            scope:["email", "profile"],
        },
        function (accessToken, refreshToken, profile, cb){
            const {name, picture, email} = profile._json
            let role = null
            //add lang kayo params dito if usto nyo check admin side or user side
            //need email lagay mo dito
            const admin = ['sample']
            //dito chinecheck if nasa admin params ba tlga sya
            if(admin.includes(email)){
                role = 'admin'
            }
            else{
                role = 'user'
            }
            const user = {name, picture, email, role}
            cb(null, user)
        }
    )
)
