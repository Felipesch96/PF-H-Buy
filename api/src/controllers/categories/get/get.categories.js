const Category = require("../../../schemas/Categories");

const categoriesCtrl = {};

categoriesCtrl.getCategories = async (req, res) => {
  const name = req.query.name;
  try {
    if (!name) {
      const allCategories = await Category.find();
      allCategories.length
        ? res.status(200).send(allCategories)
        : res.status(202).send("There are no categories in the DataBase");
    } else {
      const allCategories = await Category.find();
      const categoryByName = allCategories.filter((element) =>
        element.name
          .toString()
          .trim()
          .toLowerCase()
          .includes(name.toLowerCase())
      );
      categoryByName.length
        ? res.status(200).send(categoryByName)
        : res
            .status(202)
            .send({ error: `No categories found with the name ${name}` });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

categoriesCtrl.categoriesById = async (req, res) => {
  const { id } = req.params;
  try {
    const categoryById = await Category.findById(id);
    res.status(200).send(categoryById);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = categoriesCtrl;
