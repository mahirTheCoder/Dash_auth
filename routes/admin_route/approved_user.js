const express = require("express");
const router = express.Router();
const { approvedUserCheck } = require("../../controllers/adminController");

router.get("/approved/:id", approvedUserCheck);

module.exports = router;
