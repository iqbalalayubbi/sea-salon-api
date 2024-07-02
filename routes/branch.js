const express = require("express");
const router = express.Router();
const { getAllBranch } = require("../controller/getAllBranch");
const { createBranch } = require("../controller/createBranch");
const { authentication } = require("../middleware/authMiddleware");
const { deleteById } = require("../controller/deleteBranch");
// const { createClient } = require("../controller/createClient.js");

router.get("/", authentication, getAllBranch);
router.post("/", authentication, createBranch);
router.delete("/:id", authentication, deleteById);

module.exports = router;
