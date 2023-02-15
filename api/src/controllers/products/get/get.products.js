const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {
  const name = req.query.name;
  try {
    if (!name) {
      const allProducts = await Product.find();
      res.status(200).send(allProducts);
    } else {
      const productByName = await Product.find({ name });
      res.status(200).send(productByName);
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

productsCtrl.productById = async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await Product.findById(id);
    res.status(200).send(productById);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = productsCtrl;
