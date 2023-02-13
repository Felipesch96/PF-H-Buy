const { Recipe, Diet } = require("../db");
const {
  getApiQuery,
  getApiId,
  getDbQuery,
  getDbId,
  getAllApi,
  getAllDb,
} = require("../helpers/products");

async function getRecipes(req, res) {
  try {
    if (req.query.name) {
      const name = req.query.name;
      const apiQuery = await getApiQuery(name);
      const dbQuery = await getDbQuery(name);
      const allQuery = apiQuery.concat(dbQuery);

      if (allQuery.length < 1) {
        res
          .status(404)
          .send({ error: `No recipes found with the name ${name}` });
      } else {
        res.status(200).send(allQuery);
      }
    } else {
      const allFromApi = await getAllApi();
      // const allFromApi = "";
      const allFromDb = await getAllDb();
      if (allFromApi) {
        if (allFromDb.length) {
          const allFromBoth = allFromApi.concat(allFromDb);
          res.status(200).send(allFromBoth);
        } else {
          res.status(200).send(allFromApi);
        }
      } else {
        if (allFromDb.length) {
          res.status(200).send(allFromDb);
        } else {
          res.status(400).send({ error: `No recipes found` });
        }
      }
    }
  } catch (error) {
    res.status(400).send(error);
  }
}

async function getIdRecipe(req, res) {
  const idRecipe = req.params.id;

  try {
    if (idRecipe.length === 36) {
      const idResult = await getDbId(idRecipe);
      res.status(200).send(idResult);
    } else if (idRecipe.length > 0 && idRecipe.length < 8) {
      const idResult = await getApiId(idRecipe);
      res.status(200).send(idResult);
    } else {
      res.status(404).send({ error: `Invalid Id` });
    }
  } catch (error) {
    res.send(error);
  }
}

async function newRecipe(req, res) {
  const { name, resume, healthScore, steps, diets, image } = req.body;
  let auxImage = "";
  if (!image) {
    auxImage = "https://images2.alphacoders.com/111/1112725.jpg";
  } else {
    auxImage = image;
  }
  try {
    if (name.trim().length && resume.trim().length) {
      const preexistingRecipeValidation = await Recipe.findOne({
        where: {
          name: name,
        },
      });
      if (!preexistingRecipeValidation) {
        const newRecipe = await Recipe.create({
          name: name,
          resume: resume,
          healthScore: healthScore,
          steps: steps,
          img: auxImage,
          createdInDb: true,
        });

        if (diets) {
          const idAux = await Diet.findAll({
            where: {
              name: diets,
            },
          });
          const dietsId = idAux.map((element) => element.id);
          await newRecipe.addDiets(dietsId);
        }
        res.status(200).send({ msg: `Recipe created successfully` });
      } else {
        res
          .status(404)
          .send({ error: `Already exists a recipe with that name` });
      }
    } else {
      res.status(404).send({
        error: `Name and resume are required, please complete with correct data`,
      });
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = { getRecipes, getIdRecipe, newRecipe };
