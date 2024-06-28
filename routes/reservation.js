const express = require("express");
const router = express.Router();
const { addReservation } = require("../controller/addReservation.js");
const { getAllReservation } = require("../controller/getAllReservation.js");
const { authentication } = require("../middleware/authMiddleware.js");

router.get("/", authentication, getAllReservation);
router.post("/", authentication, addReservation);

module.exports = router;
