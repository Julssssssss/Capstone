const router =require("express").Router()
const jwt = require('jsonwebtoken')

//to verify token 
const verifyToken = (req, res, next) => {
    const authHeader = req.header['authorization'];
    //get yung token mismo na hindi kasama yung bearer
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(403)
    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err) return res.status(403)
        req.user=user
        next()
    })
};

router.get("/data", verifyToken, (req, res)=>{
    itemModels.find({})
        .then(result=>{
            res.status(200).json({
                items: result,
                user: req.user
            })
        }
    ).catch(err=>{console.log(err)})
})

router.get('/items/:itemId', verifyToken, async(req, res)=>{
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