const mongoose = require("mongoose");

const Address = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    street: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    additional_data: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", Address);
