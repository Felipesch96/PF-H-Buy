const { Router } = require("express");
const { newPayment, payment, orderStatus } = require("../controllers/mercadoPago/mercadoPago");
const router = Router();

router.post('/:id', newPayment);
router.get('/', payment);
router.put('/:id', orderStatus);

module.exports = router