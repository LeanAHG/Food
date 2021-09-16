var router = require('./index');
const { Recipe, Dieta } = require('./db.js')

router.post('/', async function(req, res){
    const recipes = Recipe.findAll()
})