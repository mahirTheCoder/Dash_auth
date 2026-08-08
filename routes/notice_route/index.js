const express = require("express");
const router = express.Router();


// ----------all routes
const create = require("./create");
const deletes = require("./delete");
const disslike = require("./dislike");
const edits = require("./edit");
const getAll = require("./get_all");
const like = require("./like");
const dislike = require("./dislike");


// ------middleware
const { authMiddleware } = require("../../middleware/authMiddleware");
const { requireAdmin } = require("../../middleware/roleCheckMiddleware");




// ----------all routes 

router.use( authMiddleware, requireAdmin);
router.use("/notice", create);
router.use("/notice", deletes);
router.use("/notice", disslike);
router.use("/notice", edits);
router.use("/notice", getAll);
router.use("/notice", like);
router.use("/notice", dislike);



module.exports = router;