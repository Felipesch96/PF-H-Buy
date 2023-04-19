const mongoose = require("mongoose");

const products = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  img_url: {
    type: String
  },
  img_public_id:{
    type: String
  },
  description: {
    type: String,
    // require: true,
  },
  price: {
    type: Number,
    // require: true,
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
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
  visits: {
    type: Array,
  },
  stock: {
    type: Number,
    /* require: true, */
  },
  seller_id: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    // require: true,
    /* require: true, */
  },
  category: {
    type: String,
    // require: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    // require: true,
  },
  condition: {
    type: String,
    enum: ["new", "used"],
    default: "new",
    // require: true,
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
