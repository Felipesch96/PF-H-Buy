const { Router } = require("express");
const router = Router();
const {
  getProducts,
  productById,
  createNewProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controllers");

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
