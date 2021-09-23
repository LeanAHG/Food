const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRoutes = require("./recipes")
const dietsRoutes = require("./dietaTypes")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(recipeRoutes);
router.use(dietsRoutes);

module.exports = router;
