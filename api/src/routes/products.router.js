const { Router } = require("express");
const router = Router();
const { createNewProduct } = require("../controllers/products/post/post.products");
const { getProducts, productById } = require("../controllers/products/get/get.products");
const { updateProduct } = require("../controllers/products/put/put.products");
const { updateVisits } = require("../controllers/products/put/put.products");
const upload = require("../helpers/multer");

router.get("/", getProducts);
router.get("/:id", productById);
router.post("/", createNewProduct, upload.single('image'));
router.put("/visits", updateVisits);
router.put("/:id", updateProduct);

module.exports = router;
