const User = require("../../../schemas/Users");

const usersCtrl = {};

usersCtrl.updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const userUpdated = await User.findByIdAndUpdate(id, data)
    res.status(200).send(userUpdated);
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
};

module.exports = usersCtrl;
