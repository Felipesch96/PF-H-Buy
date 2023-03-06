const User = require("../../../schemas/Users");

const usersCtrl = {};

usersCtrl.updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body.userAddress;
  console.log(req.body.userAddress)
  try {
    await User.findByIdAndUpdate(id, { $push: {"userAddress": {
      fullname: data.fullname,
      country: data.country,
      city: data.city,
      address: data.address,
      postalCode: data.postalCode
    }}})
    res.status(200).send("updated successfully");
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
};

module.exports = usersCtrl;
