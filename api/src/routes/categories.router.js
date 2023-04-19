const { Router } = require("express");
const router = Router();
const { createNewCategories } = require("../controllers/categories/post/post.categories");
const { getCategories, categoriesById } = require("../controllers/categories/get/get.categories");
const { updateCategories } = require("../controllers/categories/put/put.categories");
const { deleteCategories } = require("../controllers/categories/delete/delete.categories");


router.get("/", getCategories);
router.get("/:id", categoriesById);
router.post("/", createNewCategories);
router.put("/:id", updateCategories);
router.delete("/:id", deleteCategories);

module.exports = router;