const { Router } = require("express");
const { newOrder } = require("../controllers/orders/post/order.post");
const router = Router();

router.post('/', newOrder)

// router.get('/id', ordersHistory)

module.exports = router