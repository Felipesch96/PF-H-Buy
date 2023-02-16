const Product = require("../../../../schemas/Products");
const Filter = require("../../../../schemas/Filter");

const filterByCategory = async (name, aux) => {
  if (!aux) {
    const filtered = await Product.find({ category: name });
    return filtered;
  } else {
    const filtered = aux.filter((element) => element.category === name);
    await Filter.deleteMany();
    return filtered;
  }
};

module.exports = filterByCategory;
