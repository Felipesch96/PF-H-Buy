const { Router } = require("express");
const router = Router();
const { createNewProduct } = require("../controllers/products/post/post.products");
const { getProducts, productById } = require("../controllers/products/get/get.products");
const { updateProduct } = require("../controllers/products/put/put.products");
const { deleteProduct } = require("../controllers/products/delete/delete.products");

const upload = require("../multer");

router.get("/", getProducts);
router.get("/:id", productById);
router.post("/", createNewProduct, upload.single('image'));
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
