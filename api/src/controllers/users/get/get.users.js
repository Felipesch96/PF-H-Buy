const User = require("../../../schemas/Users");

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
  const name = req.query.name;
  try {
    if (!name) {
      const allUsers = await User.find();
      allUsers.length
        ? res.status(200).send(allUsers)
        : res.status(202).send({ error: `There are no users in the DataBase` });
    } else {
      const allUsers = await User.find();
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
    const useById = await User.findById(id);
    res.status(200).send(useById);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

usersCtrl.userByEmail = async (req, res) => {
  const {email} = req.body;
  try {
    const userByEmail = await findOne({where: email});
    res.send(userByEmail);
  } catch (error) {
    console.log(error);
  }
};


usersCtrl.getUser = async (req, res) =>{
  try {
    const userByEmail = await findOne({where: email});
    res.send(userByEmail);
  } catch (error) {
    console.log(error);
  }
};
module.exports = usersCtrl;
