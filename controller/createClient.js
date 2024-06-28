const Client = require("../models/Client.js");
const { hashPassword } = require("../service/hashPassword.js");
const { createResponse } = require("../service/response.js");

async function createClient(req, res, next) {
  const { fullName, phoneNumber, email, password } = req.body;
  const hashPass = await hashPassword(password);
  const client = new Client({
    fullName,
    phoneNumber,
    email,
    password: hashPass,
    role: "client",
  });

  try {
    await client.save();
    const response = createResponse(200, "User created successfully");
    res.status(200).json(response);
  } catch (error) {
    const response = createResponse(500, "Server error");
    res.status(500).json(response);
  }
}

module.exports = { createClient };
