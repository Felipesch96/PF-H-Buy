const { Router } = require("express");
const { newOrder } = require("../controllers/orders/post/order.post");
const ordersHistory = require("../controllers/orders/get/order.get");
const {updateOrder, completedOrder} = require("../controllers/orders/put/order.put")
const router = Router();

router.post('/', newOrder)
router.get('/', ordersHistory)
router.get('/:id', ordersHistory)
router.put('/:id', updateOrder)
router.put('/success/:id', completedOrder)
module.exports = router