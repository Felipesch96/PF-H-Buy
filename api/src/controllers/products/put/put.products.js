const Product = require("../../../schemas/Products");
const cloudinary = require("../../cloudinary/cloudinaryConection");
const Users = require("../../../schemas/Users");
const transporter = require("../../../config/mailer");
const { EMAIL_ADMIN } = process.env;

const productsCtrl = {};

productsCtrl.updateProduct = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const productById = await Product.findById(id);
  const user = await Users.findById(productById.seller_id);
  console.log(user);
  console.log(productById);

  if (data.img) {
    try {
      await cloudinary.uploader.destroy(productById.img_public_id);
      const uploadResponse = await cloudinary.uploader.upload(data.img, {
        upload_preset: "henrybuy",
      });
      await Product.findByIdAndUpdate(id, {
        ...data,
        img_url: uploadResponse.secure_url,
        img_public_id: uploadResponse.public_id,
      });
      await transporter.sendMail({
        from: `H-Buy<${EMAIL_ADMIN}>`, // sender address
        to: user.email, // list of receivers
        subject: "Bienvenido a esta hermosa comunidad!", // Subject line
        html: `<h1><b>Producto Editado con exito</b> <a href="https://main.d2d0y3pf0pfssa.amplifyapp.com/products/${id}">Go to Product</a></h1>`,
      });
      res.status(200).send("updated with success");
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    try {
      await Product.findByIdAndUpdate(id, data);
      res.status(200).send("updated with success");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

productsCtrl.updateVisits = async (req, res) => {
  const { product_id, user_id } = req.body;
  const product = await Product.findById(product_id);
  const verify = product.visits.includes(user_id);

  try {
    if (!verify) {
      const data = {
        visits: [...product.visits, user_id],
      };
      await Product.findByIdAndUpdate(product_id, data);
      res.status(200).send("updated with success");
    } else {
      res.status(200).send("the visit already exists");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = productsCtrl;
