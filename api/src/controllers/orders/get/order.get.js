const Order = require("../../../schemas/Order");

const ordersHistory = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(200).send(await Order.find().populate("items.product"));
    } else {
      res.status(200).send(await Order.findById(id).populate("items.product"));
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = ordersHistory;
