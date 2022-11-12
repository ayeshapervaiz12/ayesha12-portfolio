const express = require("express");
const router = express.Router();
const { getUsers, Usercreate } = require('../controller/user');
router.get("/", getUsers);
router.post("/", Usercreate);

module.exports = router