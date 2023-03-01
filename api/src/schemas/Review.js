const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Types.ObjectId,
        ref: "Products",
      },
    // user_id: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Users",
    //   },
    comment: {
        type: String,
    },
    qualification: {
        type: Number,
    },

});

module.exports = mongoose.model("Review", reviewSchema);