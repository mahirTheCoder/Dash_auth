const express = require("express");
const router = express.Router();
const { allUserCheck , approvedUserCheck , deleteUserCheck , studentUserCheck, teacherUserCheck} = require("../../controllers/adminController");



router.get("/allUserCheck", allUserCheck);
router.get("/studentUserCheck", studentUserCheck);
router.get("/teacherUserCheck", teacherUserCheck);
router.patch("/approvedUserCheck/:id", approvedUserCheck);
router.delete("/deleteUserCheck/:id", deleteUserCheck);

module.exports = router;