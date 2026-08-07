const express = require("express");
const router = express.Router();
// const { approvedUserCheck } = require("../../controllers/adminController");
const { approvedUserCheck } = require("../../controllers/admin/approved");

router.patch("/approved/:id", approvedUserCheck);

module.exports = router;
