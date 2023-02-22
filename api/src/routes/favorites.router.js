const { Router } = require("express");
const router = Router();
const { allFavs } = require("../controllers/favs/get/get.favs");

router.get("/", allFavs);

module.exports = router;
