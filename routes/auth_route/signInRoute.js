const express = require("express");
const router = express.Router();

const { signin } = require("../../controllers/auth/signinCon");

router.post("/signin", signin );

module.exports = router;