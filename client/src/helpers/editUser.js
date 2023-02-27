import axios from "axios";

export const editUser = async (user) => {
    console.log(user)
  await axios.put(`http://localhost:3001/users/${user._id}`, user);
};
