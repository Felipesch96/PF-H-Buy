const { Router } = require("express");
const {uploadImg} = require("./uploadImage");
const router = Router();

// router.post("/cloud", (req, res) => {
//   uploadImage(req.body.image)
//     .then((url) => res.send(url))
//     .catch((err) => res.status(500).send(err));
// });

router.post("/", uploadImg);


module.exports = router;
