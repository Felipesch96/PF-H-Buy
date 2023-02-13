const { Router } = require("express");
const router = Router();
const {
  getRecipes,
  getIdRecipe,
  newRecipe,
} = require("../controllers/products");

router.get("/", getRecipes);
router.get("/:id", getIdRecipe);
router.post("/", newRecipe);

module.exports = router;
