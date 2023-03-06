const Product = require("../../../schemas/Products");
const cloudinary = require("../../cloudinary/cloudinaryConection");


const productsCtrl = {};

productsCtrl.updateProduct = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const productById = await Product.findById(id);
  console.log(productById)

  if (data.img) {
    try {
      await cloudinary.uploader.destroy(productById.img_public_id);
      const uploadResponse = await cloudinary.uploader.upload(data.img, {
        upload_preset: "henrybuy",
      });
      // console.log(uploadResponse);
      await Product.findByIdAndUpdate(id, {
        ...data,
        img_url: uploadResponse.secure_url,
        img_public_id: uploadResponse.public_id,
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
  const verify = product.visits.includes(user_id)

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
