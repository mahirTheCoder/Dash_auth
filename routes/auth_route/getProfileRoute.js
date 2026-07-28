const express = require("express");
const router = express.Router();
// const multer = require("multer");
// const upload = multer();


const {rateLimit} = require('express-rate-limit')



// --------limiter add 
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	limit: 5, // Limit each IP to 5 requests per `window` (here, per 10 minutes).
    message: "Too many requests from this IP, please try again after 10 minutes",
    // skipSuccessfulRequests: true, // Skip counting successful requests (status codes < 400)
})


const {authMiddleware} = require("../../middleware/authMiddleware");

const { getProfile } = require("../../controllers/authcontroller");

router.get("/getProfile", limiter, authMiddleware, getProfile);

module.exports = router;