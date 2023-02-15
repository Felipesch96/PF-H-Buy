const Product = require("../schemas/Products");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).send(allProducts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

productsCtrl.productById = async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await Product.findById(id);
    res.status(200).send(productById);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

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

productsCtrl.updateProduct = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await Product.findByIdAndUpdate(id, data);
    res.status(200).send("updated with success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

productsCtrl.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const productById = await Product.findById(id);

  try {
    if (!productById.isActive) {
      res.status(200).send("deactivates the product");
    } else {
      await Product.findByIdAndDelete(id);
      res.status(200).send("successfully removed");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = productsCtrl;
