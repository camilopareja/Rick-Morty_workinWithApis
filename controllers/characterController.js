const fetch = require('node-fetch');

const characterController = {
    
    card: (req,res) => {
        character = `https://rickandmortyapi.com/api/character/${req.params.id}`
        fetch(character)
            .then(response => response.json())
            .then(data => res.render("character", {character: data}));
    },

    randomCard: (req,res) => {
        character = `https://rickandmortyapi.com/api/character/${req.params.id}`
        fetch(character)
            .then(response => response.json())
            .then(data => res.render("randomCharacter", {character: data}));
    }
}

module.exports = characterController
