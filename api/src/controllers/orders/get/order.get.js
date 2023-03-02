const Order = require("../../../schemas/Order");

const ordersHistory = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(200).send(await Order.find().populate("items.product"));
    } else {
      const ordersByBuyer = await Order.find({buyer_id: id}).populate("items.product");
      res.status(200).send(ordersByBuyer);
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = ordersHistory;
