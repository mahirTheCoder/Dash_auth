const express = require("express");
const router = express.Router();
const { createSubject , getAllSubjects, deleteSubject } = require("../../controllers/subjectController");
const { authMiddleware } = require("../../middleware/authMiddleware");
const { requireAdmin } = require("../../middleware/roleCheckMiddleware");


router.post("/create" , authMiddleware, requireAdmin,  createSubject  );
router.get("/getallsubjects" , authMiddleware, requireAdmin,  getAllSubjects  );
router.delete("/delsubj/:id" , authMiddleware, requireAdmin,  deleteSubject  );

module.exports = router;