const Favorites = require("../../../schemas/Favorites");

const allFavs = async (req, res) => {
  try {
    const allFavs = await Favorites.find();
    res.status(200).send(allFavs);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { allFavs };
