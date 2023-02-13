const { Router } = require("express");
const recipe = require("./products");
const diet = require("./users");

const router = Router();

router.use("/users", recipe);
router.use("/products", diet);

module.exports = router;
