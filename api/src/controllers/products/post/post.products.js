const Product = require("../../../schemas/Products");
const cloudinary = require("../../cloudinary/cloudinaryConection");
const transporter = require("../../../config/mailer");
const Users = require("../../../schemas/Users");
const { EMAIL_ADMIN } = process.env;

const productsCtrl = {};

productsCtrl.createNewProduct = async (req, res) => {
  const data = req.body;
  const user = await Users.findById(data.seller_id);
  try {
    const uploadResponse = await cloudinary.uploader.upload(data.img, {
      upload_preset: "henrybuy",
    });

    if (data.name.trim().length && data.description.trim().length) {
      const newProduct = new Product({
        ...data,
        img_url: uploadResponse.secure_url,
        img_public_id: uploadResponse.public_id,
      });
      await newProduct.save();
      await transporter.sendMail({
        from: `H-Buy<${EMAIL_ADMIN}>`, // sender address
        to: user.email, // list of receivers
        subject: "Bienvenido a esta hermosa comunidad!", // Subject line
        html: `<h1><b>Producto Creado con exito</b> <a href="https://main.d2d0y3pf0pfssa.amplifyapp.com/products/${newProduct._id}">Go to Product</a></h1>`,
      });
      res.status(200).send(newProduct);
    } else {
      res.status(400).send({ error: `Please complete the form correctly` });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = productsCtrl;
