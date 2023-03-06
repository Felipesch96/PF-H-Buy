const User = require("../../../schemas/Users");

const usersCtrl = {};

usersCtrl.updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body.userAddress;
  console.log('nueva adr',data)
  try {
    await User.findByIdAndUpdate(id, { $push: {"userAddress": {
      fullname: data.fullname,
      country: data.country,
      city: data.city,
      address: data.address,
      postalCode: data.postalCode
    }}})
    const {userAddress} = await User.findById(id)
    
    res.status(200).send(userAddress);
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
};

module.exports = usersCtrl;
