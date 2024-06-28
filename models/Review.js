const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  fullName: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
