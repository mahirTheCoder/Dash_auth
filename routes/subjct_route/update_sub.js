const express = require("express");
const router = express.Router();

const { updateSubject } = require("../../controllers/subjects/update_subect");


router.put("/updatesubj/:id" , updateSubject );


module.exports = router;