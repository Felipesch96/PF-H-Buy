const Cart = require("../../../schemas/Cart");


const deleteCart = async (req, res) => {
  const { id } = req.params;
  const { eraseAll } = req.body;
  const userCart = await Cart.find({ _id: id, quantity: { $gte: 2 } });

  try {
    if (eraseAll) {
      await Cart.findByIdAndDelete(id)
      res.status(200).send("Successfully removed");
    } else {
      if (!userCart.length){
        await Cart.findByIdAndDelete(id);
        res.status(200).send("Successfully removed");
      } else {
        const aux = {quantity: Number(userCart[0].quantity) - 1};
        await Cart.findByIdAndUpdate(id, aux);
        res.status(200).send("Successfully removed");
      }
    }
    
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { deleteCart };