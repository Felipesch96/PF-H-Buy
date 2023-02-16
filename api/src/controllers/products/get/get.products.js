const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {
  const { name, category, priceMin, priceMax, brand, condition } = req.query;
  try {
    if (name || category || priceMin || priceMax || brand || condition) {
      if (category !== undefined && typeof category === "string") {
        const allProducts = await Product.find({
          category: category
        });
        return res.status(200).send(allProducts)
      } else if (name !== undefined && typeof name === "string") {
        const allProducts = await Product.find({
          name: name && new RegExp(name, "i")
        });
        return res.status(200).send(allProducts)
      } else if (priceMin !== undefined && priceMax !== undefined && typeof priceMin === "number" && typeof priceMax === "number") {
        const allProducts = await Product.find({
          price: hola
        })
        return res.status(200).send(allProducts)
      } else if (brand !== undefined && typeof brand === "string") {
        const allProducts = await Product.find({
          brand: brand
        });
        return res.status(200).send(allProducts)
      } else if (condition !== undefined && typeof condition === "string") {
        const allProducts = await Product.find({
          condition: condition
        });
        return res.status(200).send(allProducts)
      } else {
        res.status(202).send({ error: `There are no products in the DataBase` });
      }
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
