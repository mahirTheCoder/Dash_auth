const express = require("express");
const router = express.Router();

const { getAllSubjects } = require("../../controllers/subjects/get_subject");


router.get("/getallsubjects" , getAllSubjects  );

module.exports = router;