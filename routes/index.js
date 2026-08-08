const express = require("express");
const router = express.Router();

// ---------base url for all routes
const baseUrl = process.env.BASE_URL;

// ---------importing routes
const authRoutes = require("./auth_route");
const adminRoutes = require ('./admin_route')
const classRoutes = require ('./class_route')
const subjectRoutes = require ('./subjct_route')
const noticeRoutes = require ('./notice_route')



router.use(baseUrl, authRoutes);
router.use(baseUrl, adminRoutes);
router.use(baseUrl, classRoutes);
router.use(baseUrl, subjectRoutes);
router.use(baseUrl, noticeRoutes);


module.exports = router;