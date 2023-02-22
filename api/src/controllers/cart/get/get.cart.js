const Cart = require("../../../schemas/Cart");

const allCart = async (req, res) => {
  const { id } = req.params;
  try {
    const allCart = await Cart.find({ buyer_id: id })
    // .populate("product_id");
    allCart.length
      ? res.status(200).send(allCart)
      : res.status(400).send({ error: `No products in Cart` });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { allCart };
