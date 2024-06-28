const bcrypt = require("bcrypt");
const saltRounds = 10;

async function hashPassword(password) {
  const result = await bcrypt.hash(password, saltRounds);
  return result;
}

async function checkPassword(password, hashPassword) {
  const result = await bcrypt.compare(password, hashPassword);
  return result;
}

module.exports = { hashPassword, checkPassword };
