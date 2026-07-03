const express = require("express");
const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("Sign Up Route connected successfully");
});

module.exports = router;