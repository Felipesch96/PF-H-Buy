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
  shippingAddress: {
    fullname: { type: String, required: false , default: '' },
    address: { type: String, required: false, default: '' },
    city: { type: String, required: false, default: ''},
    postalCode: { type: String, required: false, default: '' },
    country: { type: String, required: false, default: '' },
  },
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

module.exports = mongoose.model("Order", orderSchema);
