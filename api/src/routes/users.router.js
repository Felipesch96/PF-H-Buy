const { Router } = require("express");
const router = Router();
const {
  getUsers,
  usersById,
  userByEmail,
  getUser
} = require("../controllers/users/get/get.users.js");
const { createNewUser, loginUser } = require("../controllers/users/post/post.users");
const { updateUser } = require("../controllers/users/put/put.users");
const { deleteUser } = require("../controllers/users/delete/delete.users");

router.get("/", getUsers);
router.get("/", getUser);
router.get("/", userByEmail);
router.get("/:id", usersById);
router.post("/", createNewUser);
router.post("/login", loginUser)
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
