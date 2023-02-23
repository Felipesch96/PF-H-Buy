const { Router } = require("express");
const router = Router();
const { allCart } = require("../controllers/cart/get/get.cart");
const { deleteCart } = require("../controllers/cart/delete/delete.cart");
const { newCart } = require("../controllers/cart/post/post.cart")

router.get("/:id", allCart);
router.get("/", allCart);
router.delete("/:id", deleteCart);
router.post("/", newCart);

module.exports = router;