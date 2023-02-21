const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {

  const products = await Product.find();
  
  const { name, category, priceMin, priceMax, brand, condition, order } = req.query;
  try {
    if (name || category || (priceMin && priceMax) || brand || condition || order) {
      if (category && typeof category === "string") {
        const allProducts = await Product.find({
          category,
        });
        allProducts.length;
        res.status(200).send(allProducts); /* 
          : res.status(404).send("No products found"); */
      } else if (name !== undefined && typeof name === "string") {
        const allProducts = await Product.find({
          name: name && new RegExp(name, "i"),
        });
        return res.status(200).send(allProducts);
      } else if (
        priceMin !== undefined &&
        priceMax !== undefined &&
        typeof priceMin === "number" &&
        typeof priceMax === "number"
      ) {
        const allProducts = await Product.find({
          price: hola,
        });
        return res.status(200).send(allProducts);
      } else if (brand !== undefined && typeof brand === "string") {
        const allProducts = await Product.find({
          brand: brand,
        });
        return res.status(200).send(allProducts);
      } else if (condition !== undefined && typeof condition === "string") {
        const allProducts = await Product.find({
          condition: condition,
        });
        return res.status(200).send(allProducts);
      } else if (order) {
        if (order === "A-Z"){
          try {
            const productsAsc = await products.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
              return 0;
            });
            res.json(productsAsc);
          } catch (error) {
            console.log(error);
          } 
        } else if (order === "Z-A") {
          try {
            const productsDesc = await products.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
              return 0;
            });
            res.json(productsDesc);
          } catch (error) {
            console.log(error);
          }
        }

      } else {
        res
          .status(202)
          .send({ error: `There are no products in the DataBase` });
      }
    } else {
      const allProducts = await Product.find();
      allProducts.length
        ? res.status(200).send(allProducts)
        : res
            .status(400)
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
