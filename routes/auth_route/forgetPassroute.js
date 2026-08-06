const express = require("express");
const router = express.Router();

const { forgotPassword } = require("../../controllers/auth/forgotPassword.Con");

router.post("/forgotPassword", forgotPassword );

module.exports = router;