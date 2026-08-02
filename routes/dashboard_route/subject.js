const express = require("express");
const router = express.Router();
const { createSubject , getAllSubjects } = require("../../controllers/subjectController");
const { authMiddleware } = require("../../middleware/authMiddleware");
const { requireAdmin } = require("../../middleware/roleCheckMiddleware");


router.post("/create" , authMiddleware, requireAdmin,  createSubject  );
router.get("/getallsubjects" , authMiddleware, requireAdmin,  getAllSubjects  );

module.exports = router;