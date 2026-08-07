const express = require("express");
const router = express.Router();
const { createClass } = require("../../controllers/class/create_class");


router.post("/create", createClass);


module.exports = router;
