const Favorite = require("../../../schemas/Favorites");

const newFav = async (req, res) => {
  const data = req.body;
  const userFavs = await Favorite.find({user_id: data.user_id, product_id: data.product_id});
  try {
    if (!userFavs.length){
      const newFavorite = new Favorite(data);
      await newFavorite.save();
      res.status(200).send(newFavorite);
    } else {
      res.status(400).send({error: `Already added to favorites`});
    }

  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { newFav };