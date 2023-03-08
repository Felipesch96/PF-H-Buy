const mongoose = require("mongoose");

const favorites = mongoose.Schema({
  user_id: {
    type: String
  },
  product_id: {
    type: String
  },

});

module.exports = mongoose.model("Favorites", favorites);
