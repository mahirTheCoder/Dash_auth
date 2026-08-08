const express = require("express");
const router = express.Router();


// ----------all routes
const createNotice = require("./create");
const getAllNotice = require("./get_all");
const editsNotice = require("./edit");
const deletesNotice = require("./delete");
const dislikeNoticce = require("./dislike");
const likeNotice = require("./like");
const singleNotice = require("./single");

// ------middleware
const { authMiddleware } = require("../../middleware/authMiddleware");
const { requireAdmin } = require("../../middleware/roleCheckMiddleware");



// ----------all routes 

// router.use( authMiddleware, requireAdmin);
router.use("/notice", createNotice);
router.use("/notice", getAllNotice);
router.use("/notice", singleNotice);
router.use("/notice", editsNotice);
router.use("/notice", deletesNotice);
router.use("/notice", likeNotice);
router.use("/notice", dislikeNoticce);



module.exports = router;