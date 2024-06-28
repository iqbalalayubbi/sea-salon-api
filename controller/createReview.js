const Review = require("../models/Review");
const { createResponse } = require("../service/response");

async function createReview(req, res, next) {
  const { fullName, comment, rating } = req.body;
  const review = new Review({
    fullName,
    comment,
    rating,
  });

  try {
    await review.save();
    const response = createResponse(200, "Review created successfully", {
      fullName,
    });
    res.status(200).json(response);
  } catch (error) {
    const response = createResponse(400, "Review failed to create");
    res.status(400).json(response);
  }
}

module.exports = { createReview };
