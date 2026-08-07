const express = require("express");
const router = express.Router();
const { getTeachers} = require("../../controllers/adminController");




router.get("/getTeachers", getTeachers);

module.exports = router;