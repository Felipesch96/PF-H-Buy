const mongoose = require("mongoose");

const users = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  productsImages: {

  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  address:{
    type: String
  },
  userAddress:[ 
  {
    fullname: { type: String },
    address: { type: String },
    city: { type: String  },
    postalCode: { type: String },
    country: { type: String }
  }
],
  isActive: {
    type: Boolean,
    default: true,
  },
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
  addressID: {
    type: mongoose.Types.ObjectId,
    ref: "Address",
  },
  isAdmin: {
    type: Boolean,
    default: false,
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

module.exports = mongoose.model("Users", users);
