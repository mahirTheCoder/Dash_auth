const express = require("express");
const router = express.Router();


const { updateClass } = require("../../controllers/class/upadate_class");

router.put("/updateclass/:id", updateClass);

module.exports = router;
