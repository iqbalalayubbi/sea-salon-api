const express = require("express");
const router = express.Router();
const { createService } = require("../controller/createService.js");
const { authentication } = require("../middleware/authMiddleware.js");
const { getAllService } = require("../controller/getAllService.js");

router.get("/:branchId", authentication, getAllService);
router.put("/:branchId", authentication, createService);

module.exports = router;
