const express = require("express");
const { handleUserSignup, handleUserLogin  } = require("../controllers/user");
const { handleUserSignupLawyer } = require("../controllers/lawyer");
const { handleCreateComment } = require("../controllers/contact-us");

const router = express.Router();

router.post("/register", handleUserSignup);
router.post("/register-wa", handleUserSignupLawyer);
router.post("/login", handleUserLogin);
router.post('/contact-us' ,handleCreateComment)

module.exports = router;
