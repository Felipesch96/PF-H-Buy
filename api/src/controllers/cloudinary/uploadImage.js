const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dhe5bmqn3",
  api_key: "954642827644252",
  api_secret: "N4pmv31xauK_VH572pcowEPtlyo"
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto"
};

const cloudCtrl = {};

cloudCtrl.uploadImg = async (req, res) => {
  try {
    const { image } = req.body;
    console.log(image);
    const uploadResponse = await cloudinary.uploader.upload(image, {
      upload_preset: "henrybuy"
    });
    console.log(uploadResponse);
    res.json({ msg: "Image successfully uploaded" })
  } catch (error) {
    console.log(error);
  }
};

module.exports = cloudCtrl;
// (image) => { // image = base64 format (group of binary encoding)
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(image, opts, (error, result) => {
//       console.log(image);
//       if (result && result.secure_url) {
//         console.log(result.secure_url);
//         return resolve(result.secure_url);
//       }
//       console.log(error.message);
//       return reject({ message: error.message });
//     });
//   });
// };