const Categorie = require("../../../schemas/Categories");

const categoriesCtrl = {};

categoriesCtrl.createNewCategorie = async (req, res) => {
  const data = req.body;

  try {
    if (data.name.trim().length && data.description.trim().length) {
      const newCategorie = new Categorie(data);
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
