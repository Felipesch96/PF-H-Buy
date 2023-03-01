const { Router } = require("express");
const router = Router();
const { allCart } = require("../controllers/cart/get/get.cart");



router.put("/:id", allCart);


module.exports = router;