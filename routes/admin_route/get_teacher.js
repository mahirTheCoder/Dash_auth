const express = require("express");
const router = express.Router();
const { getTeachers } = require("../../controllers/admin/get_teacher");

router.get("/getTeachers", getTeachers);

module.exports = router;
