const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {
  const { name, category, priceMin, priceMax, brand, condition } = req.query;
  try {
    if (name || category || priceMin || priceMax || brand || condition) {
      // if (category !== undefined && typeof category !== "string")
      //   return res.status(400).send({ error: `Category should be a string` });
      // if (name !== undefined && typeof name !== "string")
      //   return res.status(400).send({ error: `Name should be a string` });
      // if (
      //   priceMin !== undefined &&
      //   priceMax !== undefined &&
      //   typeof priceMin !== "number" &&
      //   typeof priceMax !== "number"
      // )
      //   return res.status(400).send({ error: `Price should be a number` });
      // if (brand !== undefined && typeof brand !== "string")
      //   return res.status(400).send({ error: `Brand should be a string` });
      // if (condition !== undefined && typeof condition !== "string")
      //   return res.status(400).send({ error: `Condition should be a string` });

      const allProducts = await Product.find({
        // category: category,
        name: name && new RegExp(name, "i"),
        // brand: brand,
        // condition: condition,
      });
      allProducts.length
        ? res.status(200).send(allProducts)
        : res
            .status(202)
            .send({ error: `There are no products in the DataBase` });
    } else {
      const allProducts = await Product.find();
      allProducts.length
        ? res.status(200).send(allProducts)
        : res
            .status(202)
            .send({ error: `There are no products in the DataBase` });
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
