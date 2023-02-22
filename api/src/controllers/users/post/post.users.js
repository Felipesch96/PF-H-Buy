const User = require("../../../schemas/Users");
const Fav = require("../../../schemas/Favorites");
const bcryptjs = require("bcryptjs");
const Users = require("../../../schemas/Users");
const jwt = require("../../../helpers/createJwt");

const usersCtrl = {};

usersCtrl.loginUser = async (req, res) => {
  const { password, email } = req.body;
  console.log(req.body);
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      res.status(404).send("email no register");
    }
    if (!user.isActive) {
      res.status(404).send("user desactive");
    }
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      res.status(404).send("incorrect password");
    }
    const token = await jwt(user.id);
    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

usersCtrl.createNewUser = async (req, res) => {
  const { password, email } = req.body;
  const user = await Users.findOne({ email });
  if (user) {
    return res.send("user exist");
  }
  try {
    const salt = bcryptjs.genSaltSync();
    const newUser = await User(req.body);
    newUser.password = bcryptjs.hashSync(password, salt);
    await newUser.save();
    const newFav = await Fav({ user_id: newUser._id });
    await newFav.save();
    const id = newUser._id;
    const data = { favorites: newFav._id };
    await User.findByIdAndUpdate(id, data);
    return res.json(newUser);
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = usersCtrl;
