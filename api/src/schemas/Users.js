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
    type: Enumerator,
    require: true,
  },
  isActive: {
    type: Boolean,
    require: true,
  },
  addressID: {
    type: Number,
    require: true,
  }
})

module.exports = mongoose.model("Users", users);
