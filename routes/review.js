const express = require("express");
const router = express.Router();
const { getAllReview } = require("../controller/getAllReview.js");
const { createReview } = require("../controller/createReview.js");

router.get("/", getAllReview);
router.post("/", createReview);

module.exports = router;
