const Client = require("../models/Client");

async function checkClient(email) {
  const result = await Client.findOne({ email }).exec();
  return result;
}

module.exports = { checkClient };
