const router =require("express").Router()
const jwt = require('jsonwebtoken')

//schemas
const itemModels = require('../Models/itemModels')
const reqModel = require("../Models/requestModels")
const UserModel = require('../Models/userModels')

//to verify token 
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    console.log(token)
    console.log(req.body)
    if(token === 'null' ) {return res.sendStatus(401)}
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        const {picture, TAC} = req.user
        req.user = {
            "user": user,
            "picture": picture,
            "TAC": true
        }
        next()
    })
};

router.post("/TACagreement", verifyToken, async(req, res)=>{
    try{
        if(req.user){
            const {user} = req.user
            const {Email} = user
            console.log(Email)
            let Agreed = await UserModel.updateOne({ 'Email': Email }, {$set:{TAC:true}})
            console.log(Agreed)

           return res.sendStatus(200)
        }
    }
    catch(err){
        console.log(err)
        return res.sendStatus(500)
    }
})

//papalitan to ng post mmya pero get muna kasi tinetest placement ng data
router.post("/data", verifyToken, (req, res)=>{
    if(req.user){
        const {user, picture, TAC} = req.user
        if(TAC){
            itemModels.find({})
                .then(result=>{
                    res.status(200).json({
                        items: result,
                        picture: picture,
                        user: user,
                    })
                }
            ).catch(err=>{console.log(err)})
        }
        else{return res.sendStatus(401)}
    }
    else{
        return res.sendStatus(403)
    }
})

router.post("/request", verifyToken, async(req, res)=>{
    const {itemId} = req.body
    const {user} = req.user
    try{
        let item = await itemModels.findOne({ '_id': itemId });

        const {title, _id} = item
        const {Email} = user

        if(item == null){return res.sendStatus(403)}

        let repeat = await reqModel.findOne({ 
            'itemId': itemId,
            'Email': Email
        })

        if(repeat){
            return res.sendStatus(200)
        }

        const newReq = new reqModel({
            itemId: _id,
            title: title,
            Email: Email, 
        })
        await newReq.save()
        return res.sendStatus(200);
    }catch(err){
        console.log(err)
        return res.sendStatus(500)
    }
    
})



module.exports = router