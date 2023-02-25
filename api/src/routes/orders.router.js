const { Router } = require("express");
const router = Router();

const {newOrder} = require('../controllers/orders/post/post.orders')


router.post('/', newOrder)

// router.get('/id', ordersHistory)

module.exports = router