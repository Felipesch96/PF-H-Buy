const Filter = require("../../../schemas/Filter");

const filter2 = async (req, res) => {
  const allFilter = await Filter.find();
  res.status(200).send(allFilter);
};

module.exports = filter2;
