const Product = require("../../../schemas/Products");
const cloudinary = require("../../../cloudinary")

const productsCtrl = {};

productsCtrl.createNewProduct = async (req, res) => {
  const data = req.body;
  if (!req.file) {
    return res.status(200).send("Please select an image");
  }
  try {

    const cloudinary_image = await cloudinary.uploader.upload(req.file.path, {
      folder: "products"
    })

    data.image = {
      public_id: cloudinary_image.public_id,
      url: cloudinary_image.secure_url
    }
    
    if (data.name.trim().length && data.description.trim().length) {
      const newProduct = new Product(data);
      await newProduct.save();
      res.status(200).send(newProduct);
    } else {
      res.status(400).send({ error: `Please complete the form correctly` });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = productsCtrl;
