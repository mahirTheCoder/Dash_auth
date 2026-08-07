const express = require("express");
const router = express.Router();
const { createClass } = require("../../controllers/class/create_class");
const { getClasses } = require("../../controllers/class/get_class");
const { deleteClass } = require("../../controllers/class/del_class");
const { updateClass } = require("../../controllers/class/upadate_class");
const { authMiddleware } = require("../../middleware/authMiddleware");
const { requireAdmin } = require("../../middleware/roleCheckMiddleware");

router.post("/create", authMiddleware, requireAdmin, createClass);
router.get("/getall", authMiddleware, requireAdmin, getClasses);
router.delete("/delclass/:id", authMiddleware, requireAdmin, deleteClass);
router.put("/updateclass/:id", authMiddleware, requireAdmin, updateClass);

module.exports = router;
