const express = require("express");
const router = express.Router();

const { deleteClass } = require("../../controllers/class/del_class");

router.delete("/delclass/:id", deleteClass);


module.exports = router;
