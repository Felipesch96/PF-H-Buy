const Products = require("../../../schemas/Products");
const Review = require("../../../schemas/Review");

const postReview = async (req, res) => {
    const {comment, qualification, product_id} = req.body;
    const product= await Products.findById(product_id)
    const newReview = new Review({
        comment, qualification, product_id
    });
    
    try {
        // const newReview = new Review(data);
        // await newReview.save();
        const savedReview= await newReview.save()
        Products.reviews= Products.reviews.concat(savedReview)
        await Products.save();
        res.status(201).send(savedReview);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = postReview;