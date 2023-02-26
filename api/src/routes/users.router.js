const { Router } = require("express");
const router = Router();

const { getUsers, usersById } = require("../controllers/users/get/get.users.js");
const { createNewUser, loginUser, createNewUserByGoogle } = require("../controllers/users/post/post.users");
const { updateUser } = require("../controllers/users/put/put.users");
const { deleteUser } = require("../controllers/users/delete/delete.users");

router.get("/", getUsers);
router.get("/:id", usersById);
router.post("/", createNewUser);
router.post("/google", createNewUserByGoogle);
router.post("/login", loginUser)
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
