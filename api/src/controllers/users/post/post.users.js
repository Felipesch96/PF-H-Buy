const User = require("../../../schemas/Users");
const Users = require("../../../schemas/Users");
const transporter = require("../../../config/mailer");
const { EMAIL_ADMIN } = process.env;
const usersCtrl = {};

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
