const filter = (type, name) => {
  var filter = [];
  switch (type) {
    case "caterogy":
      return (filter = [...filter, filterByCategory(name)]);
    case "price":
      return (filter = [...filter, filterByPrice(name)]);
    case "brand":
      return (filter = [...filter, filterByBrand(name)]);
    case "newOrUsed":
      return (filter = [...filter, filterByNewOrUsed(name)]);
    case "payment":
      return (filter = [...filter, filterByPayment(name)]);
    default:
      return filter;
  }
};
module.exports = filter;
