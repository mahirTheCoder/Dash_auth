const express = require("express");
const router = express.Router();
const { dislikeNotice } = require("../../controllers/notice/dislike_notice");


router.post("/dislike/:id",  dislikeNotice);

module.exports = router;
