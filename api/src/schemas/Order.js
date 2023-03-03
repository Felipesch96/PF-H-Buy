const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyer_id: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  items: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: "Products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  // shippingAddress: {
  //   fullName: { type: String, required: true },
  //   address: { type: String, required: true },
  //   city: { type: String, required: true },
  //   postalCode: { type: String, required: true },
  //   country: { type: String, required: true },
  // },
  totalPrice: {
    type: Number,
    required: true,
  },
  delivered: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "false",
  },
  payment_id: {
    type: String,
    default: "false",
  },
  payment_method:{
    type: String,
    default: "false",
  }
  // payment: {

  // }
});

module.exports = mongoose.model("Order", orderSchema);
