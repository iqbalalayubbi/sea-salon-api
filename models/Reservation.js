const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReservationSchema = new Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  typeService: { type: String, required: true },
  datetime: { type: Date, required: true },
});

module.exports = ReservationSchema;
