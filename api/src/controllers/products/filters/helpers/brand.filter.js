const Product = require("../../../../schemas/Products");

const filterByBrand = async (name) => {
  const aux = await Product.find({ brand: name });
  return aux;
};

module.exports = filterByBrand;
