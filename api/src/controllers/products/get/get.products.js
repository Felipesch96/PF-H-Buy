const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {
  const { name, category, orderBy, orderDirection, brand, condition } =
    req.query;
  if (name && typeof name !== "string") {
    return res.status(400).send("the 'name' parameter should be a string");
  }
  if (category && typeof category !== "string") {
    return res.status(400).send("the 'category' parameter should be a string");
  }
  if (orderBy && !["name", "price", "score"].includes(orderBy)) {
    return res
      .status(400)
      .send(
        "the 'orderBy' parameter should be one of 'name', 'price', 'score'"
      );
  }
  if (orderDirection && !["asc", "desc"].includes(orderDirection)) {
    return res
      .status(400)
      .send("the 'orderDirection' parameter should be one of 'asc', 'desc'");
  }

  const categories = category && category.split(",");

  try {
    const where = {};
    if (categories) where.category = categories;
    if (name) where.name = new RegExp(name, "i");
    if (brand) where.brand = brand;
    if (condition) where.condition = condition;

    const allProducts = await Product.find(where)
      .sort([[orderBy || "name", orderDirection || "asc"]])
      .populate("reviews", {
        comment: 1,
        qualification: 1,
        user_id: 1,
        userName: 1,
        userLastName: 1,
        userImage: 1,
      });

    if (!allProducts.length) {
      return res.status(202).send("There are no products in the DataBase");
    }
    return res.status(200).send(allProducts);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

productsCtrl.productById = async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await Product.findById(id).populate("reviews", {
      comment: 1,
      qualification: 1,
      user_id: 1,
      userName: 1,
      userLastName: 1,
      userImage: 1,
    }).populate("seller_id");

    res.status(200).send(productById);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = productsCtrl;
