const Cart = require("../../../schemas/Cart");

const newCart = async (req, res) => {
  const data = req.body;
  const userCart = await Cart.find({buyer_id: data.user_id, product_id: data.product_id});
  try {
    if (!userCart.length){
        const newCart = new Cart(data);
        await newCart.save();
        res.status(200).send({ msg: `Successfully added to cart`});
    } else {
        const data = {quantity: userCart.quantity + data.quantity};
        await Cart.findByIdAndUpdatwe(userCart._id, data);
        res.status(200).send({ msg: `Successfully added to cart`});
    }
    

  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { newCart };