const express = require("express");
const router = express.Router();
const { createClass } = require("../../controllers/classController");
const { getClasses } = require("../../controllers/classController");
const { deleteClass } = require("../../controllers/classController");
const { updateClass } = require("../../controllers/classController");
const { authMiddleware } = require("../../middleware/authMiddleware");
const { requireAdmin } = require("../../middleware/roleCheckMiddleware");

router.post("/create", authMiddleware, requireAdmin, createClass);
router.get("/getall", authMiddleware, requireAdmin, getClasses);
router.delete("/delclass/:id", authMiddleware, requireAdmin, deleteClass);
router.put("/updateclass/:id", authMiddleware, requireAdmin, updateClass);

module.exports = router;
