const express = require("express");
const router = express.Router();
const { deleteUserCheck } = require("../../controllers/adminController");

router.get("/del-user/:id", deleteUserCheck);

module.exports = router;
