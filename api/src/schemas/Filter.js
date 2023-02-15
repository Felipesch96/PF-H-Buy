const mongoose = require("mongoose");

const filter = mongoose.Schema({
  filter: {
    type: Array,
  },
});

module.exports = mongoose.model("Filter", filter);
