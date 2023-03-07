const Review = require("../../../schemas/Review");
const Product = require("../../../schemas/Products")

const getReviews = async (req, res) => {
    const { id } = req.params;
    const { user_id } = req.query;
  try {
    if (!id){
      const reviews = await Review.find();
      res.status(200).send(reviews);
    } else {
      // {user_id: data.user_id, product_id: data.product_id}
      const product = await Product.findById(id).populate("reviews");
      const reviews = product.reviews.filter((review) => review.user_id?.toString() === user_id)
      res.status(200).send(reviews)
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = getReviews;
