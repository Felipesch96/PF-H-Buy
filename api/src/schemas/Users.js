const mongoose = require("mongoose");

const users = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  addressID: {
    type: mongoose.Types.ObjectId,
    ref: "Address",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Users", users);
