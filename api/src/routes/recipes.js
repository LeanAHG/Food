var {Router} = require('express');
const {addRecipe} = require('../controllers/recipes.js');

const router = Router();

router.post('/recipe', addRecipe);
router.get("/recipes", getAllRecipes);
router.get('/recipes/:id', getRecipeById);

module.exports = router;