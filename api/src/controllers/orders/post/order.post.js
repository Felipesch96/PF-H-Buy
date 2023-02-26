const Order = require('../../../schemas/Order')
const Product = require ('../../../schemas/Products')


const orderCtrl = {};

orderCtrl.newOrder = async (req, res) => {
  const data = req.body;
  try {
    const newOrder = new Order({
        buyer_id: data.buyer,
        items: data.cartItems, //id del item, cantidad, precio unitario y a quien corresponde (seller_id)
        // shippingAddress: data.shippingAddress,
        totalPrice: data.totalPrice, //redundante
      });
    await newOrder.save();
    data.cartItems.map(async (element) => {
    const aux = await Product.findById(element.product);
    const newStock = aux.stock - element.quantity;
    await Product.findByIdAndUpdate(element.product, { stock : newStock })
    }) 
    

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