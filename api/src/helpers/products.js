const axios = require("axios");
const { API } = process.env;
// const Op = Sequelize.Op;
const { Diet, Recipe } = require("../db");

async function getAllApi() {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&addRecipeInformation=true&number=100`
  );

  const apiInfo = await apiUrl.data.results.map((element) => {
    let diet = element.diets;
    if (!diet.includes("vegetarian"))
      element.vegetarian ? diet.push("vegetarian") : (diet = diet);
    if (!diet.includes("vegan"))
      element.vegan ? diet.push("vegan") : (diet = diet);
    if (!diet.includes("gluten free"))
      element.glutenFree ? diet.push("gluten free") : (diet = diet);

    return {
      id: element.id,
      name: element.title,
      healthScore: element.healthScore,
      img: element.image,
      createdInDb: false,
      diets: diet,
    };
  });
  return apiInfo;
}

async function getApiQuery(name) {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${API}`
  );

  const apiInfo = await apiUrl.data.results.map((element) => {
    let diet = element.diets;
    if (!diet.includes("vegetarian"))
      element.vegetarian ? diet.push("vegetarian") : (diet = diet);
    if (!diet.includes("vegan"))
      element.vegan ? diet.push("vegan") : (diet = diet);
    if (!diet.includes("gluten free"))
      element.glutenFree ? diet.push("gluten free") : (diet = diet);

    return {
      id: element.id,
      name: element.title,
      healthScore: element.healthScore,
      img: element.image,
      createdInDb: false,
      diets: diet,
    };
  });
  return apiInfo;
}

async function getApiId(id) {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API}`
  );
  const element = await apiUrl.data;
  let diet = element.diets;
  if (!diet.includes("vegetarian"))
    element.vegetarian ? diet.push("vegetarian") : (diet = diet);
  if (!diet.includes("vegan"))
    element.vegan ? diet.push("vegan") : (diet = diet);
  if (!diet.includes("gluten free"))
    element.glutenFree ? diet.push("gluten free") : (diet = diet);

  const recipe = {
    id: element.id,
    name: element.title,
    resume: element.summary,
    healthScore: element.healthScore,
    img: element.image,
    steps:
      element.analyzedInstructions[0] && element.analyzedInstructions[0].steps
        ? element.analyzedInstructions[0].steps
            .map((item) => item.step)
            .join(" ")
        : "",
    createdInDb: false,
    diets: diet,
  };
  return recipe;
}

async function getAllDb() {
  const allDb = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return allDb;
}

async function getDbQuery(name) {
  const queryRecipes = await Recipe.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return queryRecipes;
}

async function getDbId(id) {
  const idRecipes = Recipe.findByPk(id, {
    include: {
      model: Diet,
      atributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return idRecipes;
}

module.exports = {
  getApiQuery,
  getApiId,
  getDbQuery,
  getDbId,
  getAllApi,
  getAllDb,
};
