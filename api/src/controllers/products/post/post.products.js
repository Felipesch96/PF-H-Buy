const Product = require("../../../schemas/Products");
const cloudinary = require("../../cloudinary/uploadImage");

const productsCtrl = {};

productsCtrl.createNewProduct = async (req, res) => {
  const data = req.body;
  try {
    const uploadResponse = await cloudinary.uploader.upload(data.img, {
      upload_preset: "henrybuy"
    });
    console.log(uploadResponse);
    // res.send(uploadResponse);

    if (data.name.trim().length && data.description.trim().length) {
      console.log(data);
      const newProduct = new Product({
        ...data,
        img_url: uploadResponse.secure_url,
        img_public_id: uploadResponse.public_id
      });
      await newProduct.save();
      console.log(newProduct);
      res.status(200).send(newProduct);
    } else {
      res.status(400).send({ error: `Please complete the form correctly` });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = productsCtrl;
