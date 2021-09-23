var {Router} = require('express');
const {addRecipe, getAllRecipes, getRecipeById} = require('../controllers/recipes.js');

const router = Router();

router.post('/recipe', addRecipe);
router.get("/recipes", getAllRecipes);
router.get('/recipes/:id', getRecipeById);

module.exports = router;