const Order = require('../../../schemas/Order')

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
     await Order.findByIdAndDelete(id);
      res.status(200).send("deleted with success");
    } catch (error) {
      res.status(400).send(error.message);
    }
  };


  module.exports = deleteOrder