const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.createNewProduct = async (req, res) => {
  const data = req.body;
  try {
    const newProduct = new Product(data);
    await newProduct.save();
    res.status(200).send(newProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = productsCtrl;
