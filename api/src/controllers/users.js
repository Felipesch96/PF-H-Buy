const { Diet } = require("../db");

async function getDiets(req, res) {
  try {
    let allDiets = await Diet.findAll();
    res.status(200).json(allDiets);
  } catch {
    res.status(400).send(error);
  }
}

async function dietLoader() {
  const diets = [
    "gluten free",
    "paleolithic",
    "vegetarian",
    "lacto ovo vegetarian",
    "vegan",
    "pescatarian",
    "primal",
    "whole 30",
    "fodmap friendly",
    "dairy free",
    "ketogenic",
  ];
  diets.forEach(async (element) => await Diet.create({ name: element }));
}

module.exports = { getDiets, dietLoader };
