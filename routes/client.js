const express = require("express");
const router = express.Router();
const { createClient } = require("../controller/createClient.js");

router.post("/register", createClient);

module.exports = router;
