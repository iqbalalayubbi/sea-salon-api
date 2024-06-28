const jwt = require("jsonwebtoken");

const key = "secret";
function createToken(data) {
  return jwt.sign(data, key, { expiresIn: "1h" });
}

function verifyToken(token) {
  return jwt.verify(token, key);
}

module.exports = { createToken, verifyToken };
