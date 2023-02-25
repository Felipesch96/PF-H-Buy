
const Order = require('../../../schemas/Order')

const orderCtrl = {};

orderCtrl.newOrder = async (req, res) => {
  const data = req.body;
  console.log(data)
  try {
    const newOrder = new Order({
        orderItems: req.body.cartList,
        shippingAddress: req.body.shippingAddress,
        totalPrice: req.body.totalPrice,
        user: req._id,
      });
    await newOrder.save();
      res.status(201).send({
        msg: 'order created',
        newOrder
      });
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message);
  }
};
module.exports = orderCtrl;
