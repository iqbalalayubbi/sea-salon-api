const Branch = require("../models/Branch");
const Admin = require("../models/Admin");
const { createResponse } = require("../service/response");
const { verifyToken } = require("../service/token");

async function createBranch(req, res, next) {
  try {
    const { email } = verifyToken(req.query.token);
    const { branchName } = req.body;
    const branch = new Branch(req.body);

    await branch.save().then((branch) => {
      return Admin.findOneAndUpdate(
        { email },
        { $push: { branches: branch._id } },
        { new: true }
      );
    });
    const response = createResponse(200, "success created branch", {
      branchName,
    });
    res.status(200).json(response);
  } catch (error) {
    const response = createResponse(500, error.message);
    res.status(500).json(response);
  }
}

module.exports = { createBranch };
