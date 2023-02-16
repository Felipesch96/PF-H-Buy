const filterByCategory = require("./category.filter");
const filterByBrand = require("./brand.filter");
const filterByPrice = require("./price.filter");
const Filter = require("../../../../schemas/Filter");

const filter = async (type, name) => {
  let aux = [];
  const filters = await Filter.find();
  filters.length ? (aux = filters) : (aux = null);

  function auxFunction(filter) {
    filter.forEach(async (element) => {
      const newFilter = new Filter({
        name: element.name,
        category: element.category,
        brand: element.brand,
        condition: element.condition,
        price: element.price,
        payment: element.payment,
      });
      await newFilter.save();
    });
    return filter;
  }

  switch (type) {
    case "category":
      const filterCat = await filterByCategory(name, aux);
      const auxCat = await auxFunction(filterCat);
      return auxCat;
    case "price":
      const filterPrice = await filterByPrice(name, aux);
      const auxPrice = await auxFunction(filterPrice);
      return auxPrice;
    case "brand":
      const filterBrand = await filterByBrand(name, aux);
      const auxBrand = await auxFunction(filterBrand);
      return auxBrand;
    case "newOrUsed":
      const filterCond = await filterByNewOrUsed(name, aux);
      const auxCond = await auxFunction(filterCond);
      return auxCond;
    default:
      return filter;
  }
};
module.exports = filter;
