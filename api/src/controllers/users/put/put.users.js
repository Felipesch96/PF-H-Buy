const User = require("../../../schemas/Users");

const usersCtrl = {};

usersCtrl.updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await User.findByIdAndUpdate(id, data);
    res.status(200).send("updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = usersCtrl;
