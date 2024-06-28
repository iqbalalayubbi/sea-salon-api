const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  branches: [{ type: Schema.Types.ObjectId, ref: "Branch", default: [] }],
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
