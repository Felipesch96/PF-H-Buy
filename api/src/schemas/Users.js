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
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
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
