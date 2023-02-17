const mongoose = require("mongoose");

const products = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  score: {
    type: Number,
  },
  review: {
    type: String,
  },
  stock: {
    type: Number,
    require: true,
  },
  seller_id: {
    type: Number,
    require: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Categories",
    require: true,
  },
  created: {
    type: Date,
    default: () => Date.now(),
  },
  modified: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Products", products);
