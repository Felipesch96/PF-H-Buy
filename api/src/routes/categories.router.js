const { Router } = require("express");
const router = Router();
const {
  createNewCategories,
} = require("../controllers/categories/post/post.categories");
const {
    getCategories,
  categoriesById,
} = require("../controllers/categories/get/get.categories");
const { updateCategories } = require("../controllers/categories/put/put.categories");
const {
  deleteCategories,
} = require("../controllers/categories/delete/delete.categories");

//Get Product
router.get("/", getCategories);
router.get("/:id", categoriesById);

//Create Product
router.post("/", createNewCategories);

//Edit Product
router.put("/:id", updateCategories);

//Delete Note
router.delete("/:id", deleteCategories);

module.exports = router;