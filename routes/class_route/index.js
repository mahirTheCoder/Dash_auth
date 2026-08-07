const express = require("express");
const router = express.Router();



// // ----------all routes
const cls = require("./create_cls");
const getCls = require("./get_cls");
const delCls = require("./del_cls");
const upCls = require("./update_cls");



const { authMiddleware } = require("../../middleware/authMiddleware");
const { requireAdmin } = require("../../middleware/roleCheckMiddleware");




// // ----------all routes 
router.use( authMiddleware, requireAdmin);
router.use("/class", cls);
router.use("/class", getCls);
router.use("/class", delCls);
router.use("/class", upCls);



module.exports = router;