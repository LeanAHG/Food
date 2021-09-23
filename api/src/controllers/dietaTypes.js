const { DietaType } = require('../db');

const getDiets = async function(req, res, next){
    diets = await DietaType.findAll()
    return res.json(diets);
}

module.exports = {
    getDiets
};