const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceSchema = new Schema({
  serviceName: { type: String, required: true },
  duration: { type: String, required: true },
  model: { type: String, required: true },
});

module.exports = ServiceSchema;
