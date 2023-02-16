const mongoose = require("mongoose");

const filter = mongoose.Schema({
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
  brand: {
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
    /* require: true, */
  },
  seller_id: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    /* require: true, */
  },
  category: {
    type: String,
  },

  condition: {
    type: String,
    enum: ["new", "used"],
    default: "new",
  },
});

module.exports = mongoose.model("Filter", filter);
