const express = require("express");
const router = express.Router();
const { createSubject } = require("../../controllers/subjectController");
const { authMiddleware } = require("../../middleware/authMiddleware");
const { requireAdmin } = require("../../middleware/roleCheckMiddleware");


router.post("/create" , authMiddleware, requireAdmin,  createSubject  );

module.exports = router;