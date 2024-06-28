const Reservation = require("../models/Reservation");
const Client = require("../models/Client");
const { verifyToken } = require("../service/token");
const { createResponse } = require("../service/response");

async function addReservation(req, res, next) {
  try {
    const { token } = req.query;
    const result = verifyToken(token);
    const reservationData = req.body;
    const reservationClient = await Client.findOneAndUpdate(
      {
        email: result.email,
      },
      { $push: { reservation: reservationData } },
      { new: true }
    );

    if (reservationClient) {
      const response = createResponse(200, "Reservation added successfully");
      res.status(200).json(response);
    } else {
      const response = createResponse(400, "Client not found");
      res.status(400).json(response);
    }
  } catch (error) {
    const response = createResponse(500, error.message);
    res.status(500).json(response);
  }
}

module.exports = { addReservation };
