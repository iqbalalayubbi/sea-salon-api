const express = require("express");
const router = express.Router();
// const { createClient } = require("../controller/createClient.js");

router.get("/", (req, res) => {
  console.log(req.session);
});

module.exports = router;
