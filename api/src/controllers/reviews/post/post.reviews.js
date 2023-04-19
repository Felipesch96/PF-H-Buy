const Products = require("../../../schemas/Products");
const Review = require("../../../schemas/Review");
const transporter = require("../../../config/mailer");
const Users = require("../../../schemas/Users");
const { EMAIL_ADMIN } = process.env;

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

    await transporter.sendMail({
      from: `H-Buy<${EMAIL_ADMIN}>`, // sender address
      to: user.email, // list of receivers
      subject: "Bienvenido a esta hermosa comunidad!", // Subject line
      html: `<h1><b> Your product has received a review </b> <a href="https://main.d2d0y3pf0pfssa.amplifyapp.com/products/${product_id}">Go to Product</a></h1>`,
    });

    res.status(201).send(savedReview);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = postReview;
