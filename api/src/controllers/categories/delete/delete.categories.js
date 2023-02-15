const Categories = require("../../../schemas/categories");

const categoriesCtrl = {};

categoriesCtrl.deleteCategories = async (req, res) => {
  const { id } = req.params;

  try {
    
    await Categories.findByIdAndDelete(id);
    res.status(200).send("successfully removed");
    
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = categoriesCtrl;
