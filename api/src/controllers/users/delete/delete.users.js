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
  const { id, addressId } = req.body
  console.log(req.body)

  
  try {
    const userById = await User.findById(id).update({
      $pull: {"userAddress": addressId}
    });
    console.log(userById)
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
};

module.exports = usersCtrl;
