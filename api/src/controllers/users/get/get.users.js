const User = require("../../../schemas/Users");

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
  const { name, email } = req.query;
  try {
    if (email) {
      const userByEmail = await User.find({
        email: email && new RegExp(email),
      });
      userByEmail.length
        ? res.status(200).send(userByEmail)
        : res.status(400).send({ error: `No user found with that email` });
    } else if (!name) {
      const allUsers = await User.find().populate("reviews", {
        comment: 1,
        qualification: 1,
        product_id: 1
      });
      allUsers.length
        ? res.status(200).send(allUsers)
        : res.status(202).send({ error: `There are no users in the DataBase` });
    } else {
      const allUsers = await User.find().populate("reviews", {
        comment: 1,
        qualification: 1,
        product_id: 1
      });
      const userByName = allUsers.filter((element) =>
        element.name
          .trim()
          .toString()
          .toLowerCase()
          .includes(name.toLowerCase())
      );
      userByName.length
        ? res.status(200).send(userByName)
        : res
            .status(202)
            .send({ error: `No users found with the name ${name}` });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

usersCtrl.usersById = async (req, res) => {
  const { id } = req.params;
  try {
    const userById = await User.findById(id).populate("reviews", {
      comment: 1,
      qualification: 1,
      product_id: 1
    });
    res.status(200).send(userById);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = usersCtrl;
