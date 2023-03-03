const Product = require("../../../schemas/Products");

const productsCtrl = {};

productsCtrl.deleteProduct = async (req, res) => {
  
  const { id } = req.params;
  const ProductById = await Product.findById(id);

  try {
    if (ProductById.isActive==true) {
      await Product.findOneAndUpdate({ _id: id }, { isActive: false });
    res.status(200).send("successfully removed");
    }else if(ProductById.isActive==false){
      await Product.findOneAndUpdate({ _id: id }, { isActive: true });
      res.status(200).send("successfully added");
    }
     else {
    res.status(200).send("this product not exist");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = productsCtrl;
