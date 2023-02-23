const Cart = require("../../../schemas/Cart");

const newCart = async (req, res) => {
  const data = req.body;
  const userCart = await Cart.find({buyer_id: data.buyer_id, product_id: data.product_id});
  try {
    if (!userCart.length){
        const newCart = new Cart(data);
        await newCart.save();
        res.status(200).send({ msg: `Successfully added to cart`});
    } else {
        const aux = {quantity: Number(userCart[0].quantity) + Number(data.quantity)};
        await Cart.findByIdAndUpdate(userCart[0]._id, aux);
        res.status(200).send({ msg: `Successfully added to cart`});
    }
    

  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { newCart };