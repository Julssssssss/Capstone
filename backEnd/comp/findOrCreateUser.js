const User = require('../Models/userModels')
const jwt = require('jsonwebtoken')

const createToken = (user, profile)=>{
  const {_id, Name, Email, Role}=user
    const data = {_id, Name, Email, Role}
    // If user exists, return the user
    const accessToken = jwt.sign(data, process.env.JWT_ACCESS_SECRET)
    const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_SECRET)
    const token = {
      'accessToken': accessToken,
      'refreshToken': refreshToken,
      'picture': profile.picture
    }
    return token
}

const findOrCreateUser = async (profile, done) => {
    try {
      // Find the user based on the provider ID
      let user = await User.findOne({ 'Email': profile.email });
  
      if (user) {
        const token = createToken(user, profile)
        return done(null, token);
      } else {
        // If user doesn't exist, create a new user
        user = new User({
          _id: profile.sub,
          Name: profile.name,
          Email: profile.email,
          Role: 'user'
          // Add any other relevant fields from the profile
        });
        await user.save();
        const token = createToken(user, profile)
        return done(null, token);
      }
    } catch (error) {
      return done(error);
    }
  };
  module.exports = findOrCreateUser