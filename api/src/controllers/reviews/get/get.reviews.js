const Review = require("../../../schemas/Review");

const getReviews = async (req, res) => {
  //   const { id } = req.params;
  try {
    const reviews = await Review.find();
    res.status(200).send(reviews);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getReviews;
