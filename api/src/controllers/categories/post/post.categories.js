const Category = require("../../../schemas/Categories");

const categoriesCtrl = {};

categoriesCtrl.createNewCategories = async (req, res) => {
  const data = req.body;

  try {
    if (data.name.trim().length) {
      const newCategorie = new Category(data);
      await newCategorie.save();
      res.status(200).send(newCategorie);
    } else {
      res.status(400).send({ error: `Please complete the form correctly` });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = categoriesCtrl;
