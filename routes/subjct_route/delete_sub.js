const express = require("express");
const router = express.Router();

const { deleteSubject } = require("../../controllers/subjects/delete_subject");

router.delete("/delsubj/:id" , deleteSubject  );


module.exports = router;