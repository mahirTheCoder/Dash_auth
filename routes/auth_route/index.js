const express = require("express");
const router = express.Router();

const SignIn = require("./signInRoute");
const SignUp = require("./signUpRoute");

router.use("/auth", SignIn);
router.use("/auth", SignUp);

module.exports = router;