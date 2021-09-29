const { Router } = require("express");
const { getDiets } = require("../controllers/dietaTypes");

const router = Router();

router.get("/types", getDiets)

module.exports = router;