const express = require("express");
const router = express.Router();

const { verifyOtp } = require("../../controllers/auth/verifyOtpCon");

router.post ("/verifyOtp", verifyOtp);

module.exports = router;