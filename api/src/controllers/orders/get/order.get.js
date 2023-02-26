const Order = require("../../../schemas/Order");

const ordersHistory = async (req, res) => {
  try {
    // res.status(200).send(await Order.deleteMany())
      res.status(200).send(await Order.find().populate("items.product"))
    
  } catch (error) {
    res.status(400).send({ error: error.message });
  }

}

module.exports = ordersHistory;