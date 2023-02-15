const Product = require("../../../schemas/Products");

const filterByCategory = (name) => {
  const aux = Product.find({ category: name });
};
