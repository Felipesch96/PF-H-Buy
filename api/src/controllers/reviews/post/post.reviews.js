const Review = require("../../../schemas/Review");

const postReview = async (req, res) => {
    const data = req.body;
    try {
        const newReview = new Review(data);
        await newReview.save();
        res.status(201).send(newReview);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = postReview;