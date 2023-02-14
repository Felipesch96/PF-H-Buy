const mongoose = require("mongoose");

const Cart = mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    seller_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    buyer_id: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", Cart);
