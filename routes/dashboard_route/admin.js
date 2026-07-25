const express = require("express");
const router = express.Router();
const { allUserCheck , approvedUserCheck , deleteUserCheck , getStudents, getTeachers} = require("../../controllers/adminController");



router.get("/allUserCheck", allUserCheck);
router.get("/getStudents", getStudents);
router.get("/getTeachers", getTeachers);
router.patch("/approvedUserCheck/:id", approvedUserCheck);
router.delete("/deleteUserCheck/:id", deleteUserCheck);
module.exports = router;