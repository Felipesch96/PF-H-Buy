const mongoose = require("mongoose");

const Address = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    additional_data: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", Address);
