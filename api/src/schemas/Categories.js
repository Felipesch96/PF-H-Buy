const mongoose = require("mongoose");

const categories = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Categories", categories);
