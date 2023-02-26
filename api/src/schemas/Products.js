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
  quantity: {
    type: Number,
    default: 0,
    require: false
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  score: {
    type: Number,
  },
  review: {
    type: String,
  },
  stock: {
    type: Number,
  },
  seller_id: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    require: true,
  },
  condition: {
    type: String,
    enum: ["new", "used"],
    default: "new",
    require: true,
  },
  created: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  modified: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Products", products);
