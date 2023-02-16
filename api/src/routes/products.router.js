const { Router } = require("express");
const router = Router();
const {
  createNewProduct,
} = require("../controllers/products/post/post.products");
const {
  getProducts,
  productById,
} = require("../controllers/products/get/get.products");
const { updateProduct } = require("../controllers/products/put/put.products");
const {
  deleteProduct,
} = require("../controllers/products/delete/delete.products");

//Get Product
router.get("/", getProducts);
router.get("/:id", productById);

//Create Product
router.post("/", createNewProduct);

//Edit Product
router.put("/:id", updateProduct);

//Delete Note
router.delete("/:id", deleteProduct);

module.exports = router;
