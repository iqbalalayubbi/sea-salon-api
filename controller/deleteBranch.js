const Branch = require("../models/Branch");
const { createResponse } = require("../service/response");

function deleteById(req, res, next) {
  Branch.findByIdAndDelete(req.params.id)
    .then((branch) => {
      if (!branch) {
        const response = createResponse(404, "Branch not found");
        return res.status(404).json(response);
      }
      const response = createResponse(200, "Branch deleted successfully");
      res.status(200).json(response);
    })
    .catch((err) => {
      const response = createResponse(500, err.message);
      res.status(500).json(response);
    });
}

module.exports = { deleteById };
