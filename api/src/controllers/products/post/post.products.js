const Product = require("../../../schemas/Products");
const cloudinary = require("../../cloudinary/cloudinaryConection");

const productsCtrl = {};

productsCtrl.createNewProduct = async (req, res) => {
  const data = req.body;
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
      res.status(200).send(newProduct);
    } else {
      res.status(400).send({ error: `Please complete the form correctly` });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = productsCtrl;
