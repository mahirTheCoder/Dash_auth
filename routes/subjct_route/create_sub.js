const express = require("express");
const router = express.Router();


const { createSubject } = require("../../controllers/subjects/create_sub");

router.post("/create" , createSubject  );

module.exports = router;