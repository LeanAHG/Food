const {Recipe, DietaType} = require('../db.js');
const { v4: uuidv4 } = require('uuid')
require('dotenv').config();
// const { API_KEY } = process.env;
// const axios = require('axios');
// const { Sequelize } = require("sequelize")

const addRecipe = async function(req, res){

    const {title, summary, spoonacularScore, healthScore, instructions, diets, image} = req.body;
    if (!title || !summary) return res.send({ error: 500, message: "Necesita un titulo y un resumen como mínimo" });

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
        const addDiets = await recipeCreated.addDietaTypes(diets)
        res.json(recipe);
    } catch(error){
        res.send(error);
    };
};

module.exports = {
    addRecipe
};

