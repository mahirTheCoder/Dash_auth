const express = require("express");
const router = express.Router();

const { resendOtp } = require("../../controllers/auth/resendOtpCon");

router.post ("/resendOtp", resendOtp);

module.exports = router;