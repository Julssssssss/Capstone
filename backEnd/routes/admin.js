const router =require("express").Router()

//schemas
const itemModels = require('../Models/itemModels')
const jwt = require('jsonwebtoken')

//to verify token 
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    if(token === 'null' ) {return res.sendStatus(401)}
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        const {role, picture} = req.user
        if(role != "admin" || role != "mod") return res.sendStatus(401)
        req.user = {
            "user": user,
            "picture": picture
        }
        next()
    })
};

//papalitan to ng post mmya pero get muna kasi tinetest placement ng data
router.get("/data", (req, res)=>{
    if(req.user){
        const {user, picture} = req.user
        itemModels.find({})
            .then(result=>{
                res.status(200).json({
                    items: result,
                    user: user,
                    picture: picture
                })
            }
        ).catch(err=>{console.log(err)})
    }
    else{
        return res.sendStatus(403)
    }
})

module.exports = router