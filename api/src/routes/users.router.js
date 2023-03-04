const { Router } = require("express");
const router = Router();

const {
  getUsers,
  usersById,
} = require("../controllers/users/get/get.users.js");
const {
  createNewUserByGoogle,
} = require("../controllers/users/post/post.users");
const { updateUser } = require("../controllers/users/put/put.users");
const { deleteUser, deleteUserAddress } = require("../controllers/users/delete/delete.users");

router.get("/", getUsers);
router.get("/:id", usersById);
router.post("/google", createNewUserByGoogle);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.delete("/", deleteUserAddress);
module.exports = router;
