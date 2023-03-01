const Favorite = require("../../../schemas/Favorites");


const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
      await Favorite.findByIdAndDelete(id);
      res.status(200).send("Successfully removed");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { deleteFav };