const User = require("../../../schemas/Users");

const usersCtrl = {};

usersCtrl.createNewUser = async (req, res) => {
  try {
    const newUser = await User(req.body);
    console.log(newUser)
    newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error(error);
  }
  
  // const data = req.body;
  // try {
  //   if (data.name.length) {
  //     const newUser = new User(data);
  //     await newUser.save();
  //     res.status(200).send(newUser);
  //   } else {
  //     res.status(400).send({ error: `Please complete the form correctly` });
  //   }
  // } catch (error) {
  //   res.status(400).send(error.message);
  // }
};
module.exports = usersCtrl;
