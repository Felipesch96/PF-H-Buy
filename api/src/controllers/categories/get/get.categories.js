const Categorie = require("../../../schemas/Categories");

const categoriesCtrl = {};

categoriesCtrl.getCategories = async (req, res) => {
  const name = req.query.name;
  try {
    if (!name) {
      const allCategories = await Categorie.find();
      allCategories.length
        ? res.status(200).send(allCategories)
        : res
            .status(202)
            .send({ error: `There are no categories in the DataBase` });
    } else {
      const allCategories = await Categorie.find();
      const productByName = allCategories.filter((element) =>
        element.name
          .toString()
          .trim()
          .toLowerCase()
          .includes(name.toLowerCase())
      );
      productByName.length
        ? res.status(200).send(productByName)
        : res
            .status(202)
            .send({ error: `No categories found with the name ${name}` });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

categoriesCtrl.productById = async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await Product.findById(id);
    res.status(200).send(productById);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = categoriesCtrl;
