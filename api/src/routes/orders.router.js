const { Router } = require("express");
const { newOrder } = require("../controllers/orders/post/order.post");
const { ordersHistory, order } = require("../controllers/orders/get/order.get");
const {updateOrder, completedOrder} = require("../controllers/orders/put/order.put");
const deleteOrder = require("../controllers/orders/delete/order.delete")
const router = Router();

router.post('/', newOrder)
router.get('/', ordersHistory)
router.get('/order/:id', order)
router.get('/:id', ordersHistory)
router.put('/:id', updateOrder)
router.put('/success/:id', completedOrder)
router.delete('/order/:id', deleteOrder)
module.exports = router