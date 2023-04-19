const Order = require('../../../schemas/Order')

const orderCtrl = {};

orderCtrl.newOrder = async (req, res) => {
  const data = req.body;
  try {
    const newOrder = new Order({
        buyer_id: data.buyer,
        items: data.cartItems,
        totalPrice: data.totalPrice,
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