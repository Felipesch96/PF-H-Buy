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
<<<<<<< Updated upstream
const { updateVisits } = require("../controllers/products/put/put.products");
=======
const {
  deleteProduct,
} = require("../controllers/products/delete/delete.products");
>>>>>>> Stashed changes
const upload = require("../helpers/multer");
const { deleteProduct } = require("../controllers/products/delete/delete.products");

router.get("/", getProducts);
router.get("/:id", productById);
<<<<<<< Updated upstream
router.post("/", createNewProduct, upload.single('image'));
router.put("/visits", updateVisits);
=======
router.post("/", createNewProduct, upload.single("image"));
>>>>>>> Stashed changes
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
