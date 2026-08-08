const express = require("express");
const router = express.Router();


const { createNotice } = require("../../controllers/notice/create_notice");

router.post("/create-notice", createNotice);

module.exports = router;
