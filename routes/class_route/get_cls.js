const express = require("express");
const router = express.Router();
const { getClasses } = require("../../controllers/class/get_class");


router.get("/getall" , getClasses);


module.exports = router;
