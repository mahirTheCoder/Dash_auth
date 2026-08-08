const express = require("express");
const router = express.Router();


const { getSingleNotice } = require("../../controllers/notice/single_notice");

router.get("/notice/:id", getSingleNotice);

module.exports = router;
