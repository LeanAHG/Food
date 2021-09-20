var {Router} = require('express');
const {addRecipe} = require('../controllers/recipes.js');

const router = Router();

router.post('/recipe', addRecipe);

module.exports = router;