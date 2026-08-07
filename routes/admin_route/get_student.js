const express = require("express");
const router = express.Router();
const { getStudents } = require("../../controllers/admin/get_students");

router.get("/students", getStudents);

module.exports = router;
