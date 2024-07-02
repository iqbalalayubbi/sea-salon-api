const Branch = require("../models/Branch");
const { createResponse } = require("../service/response");
const { verifyToken } = require("../service/token");

async function getAllService(req, res, next) {
  try {
    const { email } = verifyToken(req.query.token);
    const branch = await Branch.findById(req.params.branchId);
    const services = branch.services;
    const response = createResponse(200, "service successfully retrieved", {
      services,
    });
    res.status(200).json(response);
  } catch (error) {
    const response = createResponse(500, error.message);
    res.status(500).json(response);
  }
}

module.exports = { getAllService };
