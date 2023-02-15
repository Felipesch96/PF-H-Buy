const Categorie = require("../../../schemas/Categories");

const categoriesCtrl = {};

categoriesCtrl.updateCategorie = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await Categorie.findByIdAndUpdate(id, data);
    res.status(200).send("updated with success");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = categoriesCtrl;
