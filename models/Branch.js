const mongoose = require("mongoose");
const { Schema } = mongoose;
const ServiceSchema = require("./Service.js");

const BranchSchema = new Schema({
  branchName: { type: String, required: true },
  location: { type: String, required: true },
  openingTime: { type: String, required: true },
  closingTime: { type: String, required: true },
  services: { type: [ServiceSchema], default: [] },
});

const Branch = mongoose.model("Branch", BranchSchema);
module.exports = Branch;
