const Products = require("../../../schemas/Products");

const allCart = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body
  try {
    const byId = await Products.find({ _id: id });
    const validate = byId[0].stock;
    validate >= quantity + 1
    ?res.status(200).send("Available")
    :res.status(200).send("Out of stock");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { allCart };