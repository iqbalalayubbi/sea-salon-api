const { createResponse } = require("../service/response");
const { verifyToken } = require("../service/token");

function authentication(req, res, next) {
  const isValid = verifyToken(req.query.token);
  if (!isValid) {
    const response = createResponse(401, "Unauthorized");
    return res.status(401).json(response);
  }
  const response = createResponse(200, "Authentication successful");
  next();
}

module.exports = { authentication };
