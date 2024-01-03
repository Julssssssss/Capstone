const router = require('express').Router();
const itemModels = require('../Models/itemModels');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const cloudName = process.env.CLOUD_NAME;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(' ')[1];
  if (token === 'null') {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const { role, picture } = user;
    if (role !== 'admin' && role !== 'mod') return res.sendStatus(401);
    req.user = {
      user: user,
      picture: picture,
    };
    next();
  });
};

router.get('/data', (req, res) => {
  if (req.user) {
    const { user, picture } = req.user;
    itemModels
      .find({})
      .then((result) => {
        res.status(200).json({
          items: result,
          user: user,
          picture: picture,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } else {
    return res.sendStatus(403);
  }
});

router.get('/cloudName', (req, res) => {
  res.json(cloudName);
});

router.post('/getImage', async (req, res) => {
  try {
    // Access the Cloudinary URL and caption from the request body
    const { imageUrl, nameItem, desc, found, submitter, timestamp } = req.body;

    // Assuming `itemModels` is your MongoDB model
    const uploadItem = new itemModels({
      url: imageUrl, // Assuming your model has a field named "urls"
      nameItem: nameItem,
      desc: desc,
      found: found,
      submitter: submitter,
      timestamp: timestamp,
    });
    

    await uploadItem.save();

    // Log or process the received data (replace this with your logic)
    console.log('Image URLs:', imageUrl);

    res.status(200).json({ success: true, message: 'Image data saved successfully' });
  } catch (error) {
    console.error('Error handling upload data:', error);
    res.status(500).json({ success: false, error: 'Error handling upload data' });
  }
});

module.exports = router;
