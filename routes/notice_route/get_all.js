const express = require("express");
const router = express.Router();


const { getAllNotices } = require("../../controllers/notice/get_all_otices");

router.get("/all-notice", getAllNotices);

module.exports = router;
