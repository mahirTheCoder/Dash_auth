const express = require("express");
const router = express.Router();


// ----------all routes
const teacher = require("./get_teacher");
const student = require("./get_student");
const alluser = require("./get_all_user");
const pending = require("./get_pending_user");
const delluser = require("./del_user");
const approveduser = require("./approved_user");
const { authMiddleware } = require("../../middleware/authMiddleware");
const { requireAdmin } = require("../../middleware/roleCheckMiddleware");


// ----------all routes 

router.use( authMiddleware, requireAdmin);
router.use("/admin", alluser);
router.use("/admin", approveduser);
router.use("/admin", delluser);
router.use("/admin", pending);
router.use("/admin", teacher);
router.use("/admin", student);


module.exports = router;