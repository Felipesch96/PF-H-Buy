const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: "Products",
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  userName: {
    type: String,
  },
  userLastName: {
    type: String,
  },
  userImage: {
    type: String,
  },
  comment: {
    type: String,
  },
  qualification: {
    type: Number,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
