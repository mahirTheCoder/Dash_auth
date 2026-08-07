const express = require("express");
const router = express.Router();
const { allUserCheck } = require("../../controllers/admin/all_user");

router.get("/allUserCheck", allUserCheck);

module.exports = router;
