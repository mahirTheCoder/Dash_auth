const express = require("express");
const router = express.Router();

const baseUrl = process.env.BASE_URL;
const authRoutes = require("./auth_route");
const dashroute = require ('./dashboard_route')

router.use(baseUrl, authRoutes);
router.use(baseUrl, dashroute);

module.exports = router;