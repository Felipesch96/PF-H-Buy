const Order = require("../../schemas/Order")
const mercadopago = require("mercadopago");
mercadopago.configure({
  access_token: "TEST-4750301899601861-022719-c603a0f623bce45974123f218c61ca21-102451439",
});

const newPayment = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id).populate("items.product");
    const items = order.items?.map((element) => {
      return {
        title: element.product.name,
        unit_price: element.product.price,
        quantity: element.quantity,
      }
    });
    let preference = {
      items: items,
      back_urls: {
        "success": "http://localhost:3000/orderPlacement"
      },
      auto_return: "approved",
    };
    const response = await mercadopago.preferences.create(preference); 
    const preferenceId = response.body.id;
    
    res.status(200).send({ preferenceId });



  } catch (error) {
    res.status(400).send(error.message);
  }
};

const payment = async (req, res) => {
  console.log('lo que llega', req.query)
  try {
    res.status(200).json({
      Payment: req.query.payment_id,
      Status: req.query.status,
      MerchantOrder: req.query.merchant_order_id
    })
  }
  catch(error){
    console.log(error)
  }

};


module.exports = { newPayment, payment };

