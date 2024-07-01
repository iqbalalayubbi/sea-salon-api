const Branch = require("../models/Branch");
const { createResponse } = require("../service/response");
async function getAllBranch(req, res, next) {
  try {
    const branches = await Branch.find();
    const response = createResponse(200, "success get all branches", branches);
    res.status(200).json(response);
  } catch (error) {
    const response = createResponse(500, error.message);
    res.status(500).json(response);
  }
}

module.exports = { getAllBranch };
