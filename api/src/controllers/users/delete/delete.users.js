const User = require("../../../schemas/Users");

const usersCtrl = {};

usersCtrl.deleteUser = async (req, res) => {
  const { id } = req.params;
  const userById = await User.findById(id);

  try {
    if (userById.isActive) {
      res.status(200).send("please deactivate the user");
    } else {
      await User.findByIdAndDelete(id);
      res.status(200).send("successfully removed");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

usersCtrl.deleteUserAddress = async (req, res) => {
  
  const { id } = req.query;
  const { addressId } = req.query;
  try {
    const user = await User.findById(id);
    const addresses = user.userAddress;
    const filter = addresses.filter((element) => element._id?.toString() !== addressId)
    const aux = { userAddress : filter }
    await User.findByIdAndUpdate(id, aux)
    res.status(200).send("Address deleted correctly")
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
};

module.exports = usersCtrl;
