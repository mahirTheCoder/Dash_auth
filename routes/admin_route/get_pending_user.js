const express = require("express");
const router = express.Router();
const { getPendingUsers } = require("../../controllers/admin/pending");

router.get("/pending", getPendingUsers);

module.exports = router;
