const express = require('express');
const router = express.Router();
var index = require('../controllers/indexController')


/* GET home page. */
router.get('/', index.personajeRandom);

module.exports = router




