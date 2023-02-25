
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        buyer_id: {
            type: mongoose.Types.ObjectId,
            ref: "Users",
          },
        items: [
            {
                name: {
                    type: String,
                    required: true
                },
                image : {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                product: {
                    type: mongoose.Types.ObjectId,
                    ref: "Product",
                    required: true
                }
            }
        ],
        shippingAddress : {
                fullName: { type: String, required: true },
                address: { type: String, required: true },
                city: { type: String, required: true },
                postalCode: { type: String, required: true },
                country: { type: String, required: true }
         },
         totalPrice: {
            type: Number,
            required: true
         },
         delivered: {
            type: Boolean,
            default: false
         },
         paid: {
            type: Boolean,
            default: false
         },
        // payment: {

        // }

    }
)

module.exports = mongoose.model('Order', orderSchema)