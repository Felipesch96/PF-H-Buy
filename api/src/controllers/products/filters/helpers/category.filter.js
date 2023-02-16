const Product = require("../../../../schemas/Products");

const filterByCategory = async (name) => {
  const aux = await Product.find({ category: name });
  return aux;
};

module.exports = filterByCategory;
