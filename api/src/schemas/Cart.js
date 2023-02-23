const mongoose = require("mongoose");

const Cart = mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["in process", "sold", "delivered"],
      default: "in Process",
      require: true,
    },
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "Products",
      require: true,
    },
    seller_id: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      require: true,
    },
    buyer_id: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      require: true,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", Cart);
