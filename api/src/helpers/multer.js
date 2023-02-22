const multer = require("multer");
const path = require("path");

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, res, cb) => {
        let ext = path.extname(file.original.name)
        if (ext !== ".jpg" && ext !== ".jpge" && ext !== ".png") {
            cb(
                new Error("El formato de archivo para la imagen no está soportado, tiene que subir una imagen con extension .jpg .jpge o .png"),
                false
            );
            return;
        } 
        cb(null, true)
    }
})