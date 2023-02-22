const mongoose = require("mongoose");

const Cart = mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["in Process", "sold", "delivered"],
      default: "in Process",
      require: true,
    },
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      require: true,
    },
    seller_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      require: true,
    },
    buyer_id: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", Cart);
