const express = require("express");
const router = express.Router();

const adminRoutes = require("./admin");
const subjectRoutes = require("./subject");
const classRoute = require("./class");




router.use("/admin", adminRoutes);
router.use("/subject", subjectRoutes);
router.use("/class", classRoute);

module.exports = router;