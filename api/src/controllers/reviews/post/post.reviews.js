const Products = require("../../../schemas/Products");
const Review = require("../../../schemas/Review");
const Users = require("../../../schemas/Users");

const postReview = async (req, res) => {
  const { comment, qualification, product_id, user_id } = req.body;
  const product = await Products.findById(product_id);

  const user = await Users.findById(user_id);

  const newReview = new Review({
    comment,
    qualification,
    product_id,
    user_id,
    userName: user.name,
    userLastName: user.lastName,
    userImage: user.image,
  });

  try {
    const savedReview = await newReview.save();
    product.reviews = product.reviews.concat(savedReview);
    user.reviews = user.reviews.concat(savedReview);
    await product.save();
    await user.save();

    const productScore = await Products.findById(product_id).populate(
      "reviews",
      {
        comment: 1,
        qualification: 1,
        user_id: 1,
        userName: 1,
        userLastName: 1,
        userImage: 1,
      }
    );

    //add average product
    const qualificationArray = productScore.reviews.map((r) => r.qualification);
    let sum = qualificationArray.reduce(
      (previous, current) => (current += previous)
    );
    let avg = sum / qualificationArray.length;
    product.score = Number(avg.toFixed(1));

    await product.save();

    res.status(201).send(savedReview);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = postReview;
