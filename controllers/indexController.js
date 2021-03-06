const { response } = require('express');
const fetch = require('node-fetch');

const indexController = {
    personajeRandom: (req,res) => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => res.render("index", {character: data.results})) 
    }
};


module.exports = indexController