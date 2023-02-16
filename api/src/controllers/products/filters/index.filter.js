const Filter = require("../../../schemas/Filter");
const filter = require("./helpers/main");

const filters = async (req, res) => {
  const { type, name } = req.body;
  try {
    if (type && name) {
      const aux = await filter(type, name);
      aux.length
        ? res.status(200).send(aux)
        : res.status(400).send({ error: `No products found` });
    } else {
      res.status(400).send({ error: `No filters found` });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = filters;
