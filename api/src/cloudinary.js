const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: api.env.CLOUDINARY_CLOUD_NAME,
    api_key: api.env.CLOUDINARY_API_KEY,
    api_secret: api.env.CLOUDINARY_API_SECRET
})

module.exports = cloudinary;