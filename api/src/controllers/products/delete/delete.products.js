const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.deleteProduct = async (req, res) => {
  
  const { id } = req.params;
  const productById = await Product.findById(id);

  try {
    if (productById.isActive) {
      res.status(200).send("please deactivate the product before deleting from the database");
    } else {
      await Product.findByIdAndDelete(id);
      res.status(200).send("successfully removed");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = productsCtrl;
