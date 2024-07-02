const { createToken } = require("../service/token");
const { createResponse } = require("../service/response");
const { checkClient } = require("./getClient");
const { checkPassword } = require("../service/hashPassword");

async function login(req, res, next) {
  const { email, password } = req.body;
  if (isAdmin(email, password)) {
    const token = createToken({ email });
    const response = createResponse(200, "Login admin successfully", { token });
    res.status(200).json(response);
  } else {
    const isValid = await isClientValid(email, password);
    if (isValid) {
      const token = createToken({ email, isAdmin: true });
      const response = createResponse(200, "Login client successfully", {
        token,
      });
      res.status(200).json(response);
    } else {
      const response = createResponse(400, "Login client failed");
      res.status(401).json(response);
    }
  }
}

async function isClientValid(email, password) {
  const result = await checkClient(email);
  if (result) {
    const isValid = await checkPassword(password, result.password);
    return isValid;
  }
}

function isAdmin(email, password) {
  return email == "thomas.n@compfest.id" && password == "Admin123";
}

module.exports = { login };
