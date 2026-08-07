const express = require("express");
const router = express.Router();

const create = require("./create_sub");
const get = require("./get_sub");
const upadte = require("./update_sub");
const deletes = require("./delete_sub");


const { authMiddleware } = require("../../middleware/authMiddleware");
const { requireAdmin } = require("../../middleware/roleCheckMiddleware");





// // ----------all routes 

router.use( authMiddleware, requireAdmin);
router.use("/subject", create);
router.use("/subject", get);
router.use("/subject", upadte);
router.use("/subject", deletes);



module.exports = router;