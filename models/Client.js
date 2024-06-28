const mongoose = require("mongoose");
const { Schema } = mongoose;
const ReservationSchema = require("./Reservation.js");

const ClientSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  reservation: { type: [ReservationSchema], default: [] },
});

const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;
