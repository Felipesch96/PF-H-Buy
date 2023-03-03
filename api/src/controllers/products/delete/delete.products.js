const Product = require("../../../schemas/Products");
const cloudinary = require("../../cloudinary/cloudinaryConection");

const productsCtrl = {};

productsCtrl.deleteProduct = async (req, res) => {
  
  const { id } = req.params;
  const ProductById = await Product.findById(id);

  try {
<<<<<<< HEAD
    if (ProductById.isActive==true) {
      await Product.findOneAndUpdate({ _id: id }, { isActive: false });
    res.status(200).send("successfully removed");
    }else if(ProductById.isActive==false){
      await Product.findOneAndUpdate({ _id: id }, { isActive: true });
      res.status(200).send("successfully added");
    }
     else {
    res.status(200).send("this product not exist");
=======
    if (productById.isActive) {
      res.status(200).send("please deactivate the product before deleting from the database");
    } else {
      await cloudinary.uploader.destroy(productById.img_public_id);
      await Product.findByIdAndDelete(id);
      res.status(200).send("successfully removed");
>>>>>>> 0cc4279b5c35d1bd1678208453292872dc05ca83
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = productsCtrl;
