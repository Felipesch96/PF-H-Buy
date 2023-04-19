const Category = require("../../../schemas/Categories");

const categoriesCtrl = {};

categoriesCtrl.updateCategories = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await Category.findByIdAndUpdate(id, data);
    res.status(200).send("updated with success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = categoriesCtrl;
