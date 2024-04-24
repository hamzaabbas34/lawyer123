const { getUser } = require("../service/auth");

function checkAuthentication(req, res, next) {
  console.log("this Auth")
  const tokenCookie = req.cookies.token;
  console.log("token cookie", tokenCookie) // Log the value of the 'token' cookie
  req.user = null; // Initialize req.user to null
  
  // If there is no 'token' cookie, call the next middleware
  if (!tokenCookie) return next(); 
  const token = tokenCookie; // Extract the token
  const user = getUser(token); // Retrieve user information based on the token
  req.user = user; // Set req.user to the retrieved user information
  next(); // Call the next middleware
}


// function restrictTo(roles = []) {
//   return function (req, res, next) {
//     if (!req.user) return res.redirect("/login");
//     if (roles.includes(req.user.role)) return next();
//     return res.status(403).send('');
//   }
// }

module.exports = {
  checkAuthentication,
  //restrictTo
};
