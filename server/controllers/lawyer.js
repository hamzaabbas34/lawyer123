const lawyer = require("../models/lawyer");

async function handleUserSignupLawyer(req , res){
 const { name, email, password, phoneNumber , city , state, cnicNo,experience,experienceYear,qualifications,areaofExpertise,skypeId,imaga1,imaga2,imaga3,imaga4, } = req.body.data;
  console.log(req.body)
 await lawyer.create({
  name,
  email,
  password,
  phoneNumber,
  state,
  city,
  cnicNo,
  experience,
  experienceYear,
  qualifications,
  areaofExpertise,
  skypeId,
  imaga1,
  imaga2,
  imaga3,
  imaga4,
});
  return res.send("done");

}
module.exports = {handleUserSignupLawyer}