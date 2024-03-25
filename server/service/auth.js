const jwt = require('jsonwebtoken');
const secret = 'token'


function setUser(user) {
  const token = jwt.sign({
    _id: user._id,
    email: user.email,
    role : user.role,
  }, secret)
  return token;
}

function getUser(token) {

  console.log('get token ' , token)
  if (!token) return null
  try {
    return jwt.verify(token, "token" , {http : true})
  } catch {
    return null
  }
}

module.exports = {
  setUser,
  getUser,
};
