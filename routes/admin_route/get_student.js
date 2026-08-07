const express = require("express");
const router = express.Router();
const { getStudents } = require("../../controllers/adminController");

router.get("/students", getStudents);

module.exports = router;
