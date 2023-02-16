const filterByCategory = require("./category.filter");
const filterByBrand = require("./brand.filter");
const filterByPrice = require("./price.filter");
const Filter = require("../../../../schemas/Filter");

const filter = async (type, name) => {
  let aux = [];
  const filters = await Filter.find();
  filters.length ? (aux = filters) : (aux = null);

  switch (type) {
    case "category":
      const filterCat = await filterByCategory(name, aux);
      filterCat.forEach(async (element) => {
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
      return filterCat;
    case "price":
      const filterPrice = await filterByPrice(name, aux);
      filterPrice.forEach(async (element) => {
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
      return filterPrice;
    case "brand":
      const filterBrand = await filterByBrand(name, aux);
      filterBrand.forEach(async (element) => {
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
      return filterBrand;
    case "newOrUsed":
      const filterCond = await filterByNewOrUsed(name, aux);
      filterCond.forEach(async (element) => {
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
      return filterCond;
    default:
      return filter;
  }
};
module.exports = filter;
