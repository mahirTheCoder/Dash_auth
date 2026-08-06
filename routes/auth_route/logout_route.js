const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../../middleware/authMiddleware");
const { logout } = require("../../controllers/auth/logoutCon");

router.post("/logout", authMiddleware, logout);

module.exports = router;