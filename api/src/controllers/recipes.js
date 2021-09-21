const {Recipe, DietaType} = require('../db.js');
const { v4: uuidv4 } = require('uuid'); //crea codigos uuidv
require('dotenv').config(); // es para usar el .env
const { API_KEY } = process.env;
const axios = require('axios'); // para realizar las consultas a la API
const { Sequelize } = require("sequelize")

const addRecipe = async function(req, res){

    const {title, summary, spoonacularScore, healthScore, instructions, diets, image} = req.body;
    if (!title || !summary) return res.send({ error: 500, message: "Necesita un titulo y un resumen como mínimo" });
    //Checkeamos que tenga titulo y resumen si lo tiene pasamos a crear la receta
    try{
        const recipe = await Recipe.create({
            id: uuidv4(),
            title:title,
            summary:summary,
            aggregateLikes: 0,
            spoonacularScore:spoonacularScore,
            healthScore:healthScore,
            instructions: instructions,
            image: image || "https://www.food4fuel.com/wp-content/uploads/woocommerce-placeholder-600x600.png"
        });
        await recipe.setDietaTypes(diets)
        res.redirect(`/recipes/${recipe.id}`); //cuando se crea, redireccionamos a la pagina creada
    } catch(error){
        res.send(error);
    };
};

const getAllRecipes = async function(req, res){
    const ttl = req.query.id;
    const recipeApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&apiKey=${API_KEY}&number=100`); // .data.results.map((recipe) => {
        const infoNeededApi = /*await*/ recipeApi.data.results.map((recipe) => {
            return {
                title: recipe.title,
                diets: recipe.diets.map((diet) => { return { category: diet } }),
                healthScore: parseInt(recipe.healthScore),
                summary: recipe.summary,
                aggregateLikes: recipe.aggregateLikes,
                image: recipe.image,
                id: recipe.id,
                spoonacularScore: parseInt(recipe.spoonacularScore),
                instructions: recipe.analyzedInstructions
            }
        });

    if(!ttl){ //preguntamos si hay algun titulo ingresado en el query(es para cuando buscamos en el search)
        try{
            
            const recipeDB = await Recipe.findAll({
                include: {
                    model: DietaType,
                    attributes: ["category"]/*,
                    through: {
                        attributes: []
                    }*/
                }
            });
            const response = await Promise.all([infoNeededApi, recipeDB])
            let [recipeApiRes, recipeDBres] = response;
            res.send(recipeDBres.concat(recipeApiRes));
        }
        catch(error){
            res.send(error);
        };
    }
    else{
        const ttlMinus = ttl.toLowerCase(); //lo hacemos minuscula y buscamos coincidencias mapeando los titulos de la busqueda
        try{
            const filterRecipeApi = await infoNeededApi.filter(recipe => recipe.title.toLowerCase().includes(ttlMinus))

            const recipeDB = await Recipe.findAll({ //en la base de datos hacemos lo mismo
            where: {
                title: {
                [Sequelize.Op.iLike]: `%${ttlMinus}%` //iLike es para menospreciar mayusculas de minusculas
                },
            },
            include: {
                model: DietaType,
                attributes: ["category"]/*,
                through: {
                    attributes: []
                }*/
                }
            });
            const response = await Promise.all([filterRecipeApi, recipeDB])
            let [filterRecipeApiRes, recipeDBres] = response;
            res.send(recipeDBres.concat(filterRecipeApiRes));
        }
        catch(error){
            res.send(error);
        }
    }
}

const getRecipeById = async function(req, res){
    const id = req.params.id;
    try{
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        res.json(response.data)
    }
    catch(error){
        if(error.response.status === 404){
            const recipe = await Recipe.findByPk(id, {
                include: {
                    model: Diets,
                    attributes: ["category"],
                    through: {
                    attributes: []
                    }
                }
            })
            if (recipe){
                return res.json(recipe)
            }
            else{
                return res.sendStatus(404)
            }
        }
        else {
            res.status(500).json({ error: "Ups! Hubo un problema!" })
        };
    };  
};

module.exports = {
    addRecipe,
    getAllRecipes,
    getRecipeById
};

