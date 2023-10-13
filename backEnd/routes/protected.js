const router =require("express").Router()

//schemas
const itemModels = require('../Models/itemModels')

const jwt = require('jsonwebtoken')

//to verify token 
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['Authorization'];
    console.log(authHeader)
};

//papalitan to ng post mmya pero get muna kasi tinetest placement ng data
router.get("/data", (req, res)=>{
    const {accessToken, picture} = req.user
    const user = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET)
    itemModels.find({})
        .then(result=>{
            res.status(200).json({
                items: result,
                user: user,
                picture: picture
            })
        }
    ).catch(err=>{console.log(err)})
})

router.post('/items/:itemId', async(req, res)=>{
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


module.exports = router