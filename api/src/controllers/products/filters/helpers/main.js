const filterByCategory = require("./category.filter");
const filterByBrand = require("./brand.filter");

const filter = async (type, name) => {
  var filter = [];
  switch (type) {
    case "category":
      return (filter = [...filter, await filterByCategory(name)]);
    case "price":
      return (filter = [...filter, await filterByPrice(name)]);
    case "brand":
      return (filter = [...filter, await filterByBrand(name)]);
    case "newOrUsed":
      return (filter = [...filter, await filterByNewOrUsed(name)]);
    case "payment":
      return (filter = [...filter, await filterByPayment(name)]);
    default:
      return filter;
  }
};
module.exports = filter;
