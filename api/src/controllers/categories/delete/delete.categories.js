const Categories = require("../../../schemas/Categories");

const categoriesCtrl = {};

categoriesCtrl.deleteCategories = async (req, res) => {
  const { id } = req.params;
  const categoryById = await Categories.findById(id)
  try {
    if (categoryById.isActive){
      res.status(200).send("please deactivate the category before deleting from the database");
    } else {
      await Categories.findByIdAndDelete(id);
      res.status(200).send("successfully removed");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = categoriesCtrl;
