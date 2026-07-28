const express = require("express");
const router = express.Router();

const adminRoutes = require("./admin");
const subjectRoutes = require("./subject");



router.use("/admin", adminRoutes);
router.use("/subject", subjectRoutes);

module.exports = router;