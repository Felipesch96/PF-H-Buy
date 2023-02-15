const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {
  const name = req.query.name;
  try {
    if (!name) {
      const allProducts = await Product.find();
      allProducts.length
        ? res.status(200).send(allProducts)
        : res
            .status(202)
            .send({ error: `There are no products in the DataBase` });
    } else {
      const allProducts = await Product.find();
      const productByName = allProducts.filter((element) =>
        element.name
          .toString()
          .trim()
          .toLowerCase()
          .includes(name.toLowerCase())
      );
      productByName.length
        ? res.status(200).send(productByName)
        : res
            .status(202)
            .send({ error: `No products found with the name ${name}` });
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
