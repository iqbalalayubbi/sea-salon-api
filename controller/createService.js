const Service = require("../models/Service");
const Branch = require("../models/Branch");
const { verifyToken } = require("../service/token");
const { createResponse } = require("../service/response");
var ObjectId = require("mongoose").Types.ObjectId;

async function createService(req, res, next) {
  try {
    const { email } = verifyToken(req.query.token);
    const { serviceName } = req.body;
    const newService = req.body;
    await Branch.findOneAndUpdate(
      { _id: new ObjectId(req.params.branchId) },
      { $push: { services: newService } },
      { new: true }
    );
    const response = createResponse(200, "service created successfully", {
      serviceName,
    });
    res.status(200).json(response);
  } catch (error) {
    const response = createResponse(500, error.message);
    res.status(500).json(response);
  }
}

module.exports = { createService };
