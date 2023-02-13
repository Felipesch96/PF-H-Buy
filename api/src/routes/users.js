const { Router } = require("express");
const router = Router();
const { getDiets } = require("../controllers/users");

router.get("/", getDiets);

module.exports = router;
