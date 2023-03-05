const mongoose = require("mongoose");

const categories = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  created: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  modified: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Categories", categories);
