const express = require("express");
const router = express.Router();
const { deleteUserCheck } = require("../../controllers/admin/del_user");

router.get("/del-user/:id", deleteUserCheck);

module.exports = router;
