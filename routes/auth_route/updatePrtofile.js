const express = require("express");
const router = express.Router();
// const multer = require("multer");
// const upload = multer();

const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

// const {authMiddleware} = require("../../middleware/authMiddleware");
const { updateProfile } = require("../../controllers/auth/updateProfileCon");
const { authMiddleware } = require("../../middleware/authMiddleware");

router.put("/updateProfile",authMiddleware,upload.single("avatar"),updateProfile,);
module.exports = router;
