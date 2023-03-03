const User = require("../../../schemas/Users");

const usersCtrl = {};

usersCtrl.deleteUser = async (req, res) => {
  const { id } = req.params;
  const userById = await User.findById(id);

  try {
    if (userById.isActive==true) {
      await User.findOneAndUpdate({ _id: id }, { isActive: false });
    res.status(200).send("successfully removed");
    }else if(userById.isActive==false){
      await User.findOneAndUpdate({ _id: id }, { isActive: true });
      res.status(200).send("successfully added");
    }
     else {
    res.status(200).send("this user not exist");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = usersCtrl;
