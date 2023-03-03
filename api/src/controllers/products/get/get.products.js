const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {
  const { name, category, brand, condition } = req.query;
  try {
    if (name || category || brand || condition) {
      if (category) {
        const allProducts = await Product.find({ category });
        allProducts.length
          ? res.status(200).send(allProducts)
          : res.status(202).send("No products were found");
      } else if (name) {
        const allProducts = await Product.find({
          name: name && new RegExp(name, "i"),
        });
        allProducts.length
          ? res.status(200).send(allProducts)
          : res.status(202).send("No products were found");
      } else if (brand) {
        const allProducts = await Product.find({ brand: brand });
        return res.status(200).send(allProducts);
      } else if (condition) {
        const allProducts = await Product.find({ condition: condition });
        return res.status(200).send(allProducts);
      } else if (condition) {
        const allProducts = await Product.find({ condition: condition });
        return res.status(200).send(allProducts);
      }
    } else {
      const allProducts = await Product.find().populate("reviews", {
        comment: 1,
        qualification: 1,
        user_id: 1,
        userName: 1,
        userLastName: 1,
        userImage: 1,
      });
      allProducts.length
        ? res.status(200).send(allProducts)
        : res.status(400).send("There are no products in the DataBase");
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

productsCtrl.productById = async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await Product.findById(id).populate("reviews", {
      comment: 1,
      qualification: 1,
      user_id: 1,
      userName: 1,
      userLastName: 1,
      userImage: 1,
    });

    res.status(200).send(productById);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = productsCtrl;