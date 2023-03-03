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
  paid: {
    type: Boolean,
    default: false,
  },
  // payment: {

  // },
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

module.exports = mongoose.model("Order", orderSchema);
