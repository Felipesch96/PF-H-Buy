const Order = require("../../../schemas/Order");

const ordersHistory = async (req, res) => {
  const { id } = req.params;
  const { seller_id } = req.query;
  try {
    if (!id && !seller_id) {
      const response = await Order.find();
      res.status(200).send(response);

    } else if (id) {
      const ordersByBuyer = await Order.find({buyer_id: id}).populate("items.product");
      const response = ordersByBuyer.filter((element) => element.status === "approved");
      res.status(200).send(response);
    } else {
      const allOrders = await Order.find().populate("items.product");     
      const response = allOrders.filter(order => {
       const aux = order.items.filter(item => item.product.seller_id?.toString() === seller_id)
       if (aux.length) return order;
     });      
      res.status(200).send(response); 
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = ordersHistory;
