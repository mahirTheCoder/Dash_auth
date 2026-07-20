const express = require("express");
const router = express.Router();
// const { adminCheck } = require("../../controllers/adminController");



router.get("/check", (req, res) => {
  res.send("Admin route is working!");
});


module.exports = router;