const express = require("express");
const router = express.Router();


const { editNotice } = require("../../controllers/notice/edit_notice");

router.patch("/edit-notice/:id", editNotice);

module.exports = router;
