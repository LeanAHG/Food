const { DietaType } = require('../db');

const getDiets = async function(req, res){
    try{
        diets = await DietaType.findAll()
        res.json(diets);
    }
    catch(error){
        console.error(error);
    }
}

module.exports = {
    getDiets
};