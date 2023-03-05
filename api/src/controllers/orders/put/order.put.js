const Product = require ('../../../schemas/Products')
const Order = require('../../../schemas/Order')
const orderCtrl = {};




orderCtrl.updateOrder = async (req, res) => {
    const { id } = req.params;
    const data = req.body
    try {
     await Order.findByIdAndUpdate(id, data);
      res.status(200).send("updated with success");
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  orderCtrl.completedOrder = async(req,res) => {
    const { id } = req.params;
    try {
      const currentOrder = await Order.findById(id)
      currentOrder.items.map(async (element) => {
        const inCartProduct = await Product.findById(element.product);
        const newStock = inCartProduct.stock > 0 ? inCartProduct.stock - element.quantity : 0  
        await Product.findByIdAndUpdate(element.product, { stock : newStock })
        }) 
        res.status(201).send("Stock updated");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
module.exports = orderCtrl;