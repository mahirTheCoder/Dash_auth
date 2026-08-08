const express = require("express");
const router = express.Router();

const { likeNotice } = require("../../controllers/notice/like_notice");

router.post("/like-notice/:id", likeNotice);

module.exports = router;
