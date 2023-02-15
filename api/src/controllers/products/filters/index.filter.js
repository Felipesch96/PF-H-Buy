const filter = require("./helpers/main");

const filters = async (req, res) => {
  const { type, name } = req.body;
  try {
    res.status(200).send(filter(type, name));
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = filters;
