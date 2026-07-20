const express = require("express");
const router = express.Router();
const { adminCheck } = require("../../controllers/adminController");



router.get("/check", adminCheck);


module.exports = router;