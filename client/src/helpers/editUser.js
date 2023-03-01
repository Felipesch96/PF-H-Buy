import axios from "axios";
const {REACT_APP_API_URL} = process.env

export const editUser = async (user) => {
    console.log(user)
  await axios.put(`${REACT_APP_API_URL}/users/${user._id}`, user);
};
