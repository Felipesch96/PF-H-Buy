const mongoose = require("mongoose");

const products = mongoose.Schema(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", products);
