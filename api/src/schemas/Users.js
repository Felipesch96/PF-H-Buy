const mongoose = require("mongoose");

const users = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  userType: {
    type: String,
    enum: ["buyer", "seller", "admin"],
    default: "buyer",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  addressID: {
    type: mongoose.Types.ObjectId,
    ref: "Address",
  },
});

module.exports = mongoose.model("Users", users);
