const { Router } = require("express");
const { newPayment, payment } = require("../controllers/mercadoPago/mercadoPago");
const router = Router();

router.post('/:id', newPayment)
router.get('/', payment)

module.exports = router