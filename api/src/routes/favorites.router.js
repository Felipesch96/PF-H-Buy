const { Router } = require("express");
const router = Router();
// const { allFavs } = require("../controllers/favs/get/get.favs");
const { getFavorites } = require("../controllers/favs/get/get.favs")
const { deleteFav } = require("../controllers/favs/delete/delete.favs");
const { newFav } = require("../controllers/favs/post/post.favs")

// router.get("/:id", allFavs);
router.get("/", getFavorites);
router.delete("/:id", deleteFav);
router.post("/", newFav);

module.exports = router;
