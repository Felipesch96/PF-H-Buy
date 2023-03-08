const Favorites = require("../../../schemas/Favorites");

const favoritesCtrl = {}

favoritesCtrl.getFavorites = async (req, res) => {
  try {
    const allFavorites = await Favorites.find();
    res.send(allFavorites);
    console.log(allFavorites)
  } catch (error) {
    res.status(400).send({ error: error.message });
  };
};

module.exports = favoritesCtrl;
