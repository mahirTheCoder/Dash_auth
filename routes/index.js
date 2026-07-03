const express = require("express");
const router = express.Router();

const authRoutes = require("./auth_route");
const baseUrl = process.env.BASE_URL;

router.use(baseUrl, authRoutes);

module.exports = router;