const mongoose = require("mongoose");

const favorites = mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    require: true,
  },
  product_id: {
    type: mongoose.Types.ObjectId,
    ref: "Products",
    require: true,
  },

});

module.exports = mongoose.model("Favorites", favorites);
