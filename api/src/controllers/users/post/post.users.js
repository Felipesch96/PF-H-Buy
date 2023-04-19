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
        from: `H-Buy<${EMAIL_ADMIN}>`, // sender address
        to: email, // list of receivers
        subject: "Bienvenido a esta hermosa comunidad!", // Subject line
        html: `<h1><b>Te damos la bienvenida!</b></h1>
        <p>Gracias por elegirnos! ya podes comprar y vender lo que quieras donde quieras.</p>`,
      });
      res.status(200).send(newUser);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = usersCtrl;
