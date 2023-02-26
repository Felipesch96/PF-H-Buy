const User = require("../../../schemas/Users");
const bcryptjs = require("bcryptjs");
const Users = require("../../../schemas/Users");
const jwt = require("../../../helpers/createJwt");
const transporter = require("../../../config/mailer");
const { EMAIL_ADMIN } = process.env;
const usersCtrl = {};

usersCtrl.loginUser = async (req, res) => {
  const { password, email } = req.body;
  console.log(req.body);
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      res.status(404).send("email not registered");
    }
    if (!user.isActive) {
      res.status(404).send("user isn't active");
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
    return res.send("user with that mail already exists");
  }
  try {
    const salt = bcryptjs.genSaltSync();
    const newUser = await User(req.body);
    newUser.password = bcryptjs.hashSync(password, salt);
    await newUser.save();
    return res.json(newUser);
  } catch (error) {
    res.send(error.message);
  }
};

usersCtrl.createNewUserByGoogle = async (req, res) => {
  const { email } = req.body;
  const user = await Users.findOne({ email });
  try {
    if (user) {
      res.status(202).send(user);
    } else {
      const newUser = await User(req.body);
      await newUser.save();
      await transporter.sendMail({
        from: `Henry App <${EMAIL_ADMIN}>`, // sender address
        to: email, // list of receivers
        subject: "Henry App", // Subject line
        html: `<b>Welcome To H-Buy</b><a href="http://localhost:3000/">http://localhost:3000/</a>`,
      });
      res.status(200).send(newUser);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = usersCtrl;
