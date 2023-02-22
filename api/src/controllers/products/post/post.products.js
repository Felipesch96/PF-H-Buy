const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.createNewProduct = async (req, res) => {
  const data = req.body;
  try {
    if (data.name.trim().length && data.description.trim().length) {
      const newProduct = new Product(data);
      await newProduct.save();
      res.status(200).send(newProduct);
    } else {
      res.status(400).send({ error: `Please complete the form correctly` });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = productsCtrl;
