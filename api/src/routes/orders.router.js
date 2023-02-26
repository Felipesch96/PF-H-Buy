const { Router } = require("express");
const { newOrder } = require("../controllers/orders/post/order.post");
const ordersHistory = require("../controllers/orders/get/order.get");
const router = Router();

router.post('/', newOrder)

router.get('/', ordersHistory)

module.exports = router