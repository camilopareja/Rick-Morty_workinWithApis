const express = require('express');
const router = express.Router();
const character = require('../controllers/characterController')

/* GET users listing. */
router.get('/:id', character.card);
router.get('/random/:id', character.randomCard);

module.exports = router;


