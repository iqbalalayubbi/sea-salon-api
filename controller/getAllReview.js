const Review = require("../models/Review");
const { createResponse } = require("../service/response");

async function getAllReview(req, res, next) {
  const result = await Review.find();
  const response = createResponse(
    200,
    "All reviews retrieved successfully",
    result
  );
  res.status(200).json(response);
}

module.exports = { getAllReview };
