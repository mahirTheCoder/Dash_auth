 const express = require("express");
 const router = express.Router();
 
 const { deleteNotice } = require("../../controllers/notice/delete_notice");


router.delete("/delete-notice/:id", deleteNotice);

module.exports = router;
