const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const { updateProfile } = require("../../controllers/auth/updateProfileCon");
const { authMiddleware } = require("../../middleware/authMiddleware");

router.put("/updateProfile", authMiddleware, upload.single("avatar"), updateProfile);

module.exports = router;