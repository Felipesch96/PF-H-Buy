const Order = require('../../../schemas/Order')
const orderCtrl = {};




orderCtrl.updateOrder = async (req, res) => {
    const { id } = req.params;
    const data = req.body
    try {
      console.log('orden', req.body)
     const ordencita = await Order.findByIdAndUpdate(id, data);
     console.log(ordencita)
      res.status(200).send("updated with success");
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  orderCtrl.completedOrder = async(req,res) => {
    const { id } = req.params;
    try {
      const currentOrder = Order.findById(id)
      currentOrder.items.map(async (element) => {
        const inCartProduct = await Product.findById(element.product);
        const newStock = inCartProduct.stock > 0 ? inCartProduct.stock - element.quantity : 0  
        await Product.findByIdAndUpdate(element.product, { stock : newStock })
        }) 
        res.status(201).send({
          msg: 'order completed',
          newOrder
        });
    } catch (error) {
      console.log(error)
      res.status(400).send(error.message);
    }
  }
module.exports = orderCtrl;