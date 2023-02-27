const Favorites = require("../../../schemas/Favorites");

const allFavs = async (req, res) => {
  const {id} = req.params;
  try {
    if (!id) { 
      res.status(200).send(await Favorites.find())
    } else {
      const allFavs = await Favorites.find({user_id: id})
      .populate("product_id")
      allFavs.length?res.status(200).send(allFavs):res.status(400).send({ error: `No favorites found` });
    }
    
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { allFavs };
