const express = require("express");
const router = express.Router();

const baseUrl = process.env.BASE_URL;
const authRoutes = require("./auth_route");
const adminRoutes = require ('./admin_route')

router.use(baseUrl, authRoutes);
router.use(baseUrl, adminRoutes);

module.exports = router;