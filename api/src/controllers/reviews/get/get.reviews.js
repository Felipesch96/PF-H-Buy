const Review = require("../../../schemas/Review");

const getProducts = async (req, res) => {
//   const { id } = req.params;
  try {
    res.status(200).send(await Review.find());

  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = getProducts;