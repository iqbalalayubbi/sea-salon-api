const Client = require("../models/Client");
const { createResponse } = require("../service/response");

async function getAllReservation(req, res, next) {
  try {
    const reservations = await Client.aggregate([
      { $unwind: "$reservation" },
      { $replaceRoot: { newRoot: "$reservation" } },
    ]);
    res.status(200).json(reservations);
  } catch (error) {
    const response = createResponse(500, "server error");
    res.status(500).json(response);
  }
}

module.exports = { getAllReservation };
