
const User = require("../models/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const { name, email, password, phoneNumbe , city , state } = req.body.data;
  console.log(req.body)
 if(!name) return res.send("Name")
 await User.create({
  name,
  email,
  password,
  phoneNumbe,
  state,
  city
});
  return res.send("done");
}



async function handleUserLogin(req, res) {
  const email = req.body.email;
const password = req.body.password;
  const em = email
  const ps = password

  try {
    const user = await User.findOne({ em, ps });
    if (!user) {
      console.log("No user found");
      return res.status(401).send("Invalid Username or Password");
    }
    const token = setUser(user);
    res.cookie("token", token, {expiresIn : '90d'});
    console.log( res.cookie("token", token, {expiresIn : '90d'}))
    console.log(token)
    return res.json({token:token});

  } catch (error) {
    console.error("Error occurred during user lookup:", error);
    return res.status(500).send("An error occurred during login");
  }

  
  
}




module.exports = {
  handleUserSignup,
  handleUserLogin,
};
