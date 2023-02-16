const { Router } = require("express");
const router = Router();
const filter = require("../controllers/products/filters/index.filter");
const filter2 = require("../controllers/products/filters/filter2");

router.get("/", filter);
router.get("/f", filter2);

module.exports = router;
