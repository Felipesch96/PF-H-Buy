const { Router } = require("express");
const router = Router();
const getReviews = require("../controllers/reviews/get/get.reviews")
const postReview = require("../controllers/reviews/post/post.reviews")


router.get("/", getReviews);
router.get("/:id", getReviews);
router.post("/", postReview);


module.exports = router;