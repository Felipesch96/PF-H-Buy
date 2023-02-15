const filter = require("./helpers/main");

const filters = async (req, res) => {
  const { type, name } = req.body;
  try {
    type && name
      ? res.status(200).send(await filter(type, name))
      : res.status(400).send({ error: `No filters found` });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = filters;
