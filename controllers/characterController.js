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

        async function fetchData(urlApi) {
            const data = await fetch(urlApi);
            const characteInfo = await data.json()
            return characteInfo
        }

        (async () => {
            try {
                fetchData(character)
                    .then(data => res.render("randomCharacter", {character: data}))
            } catch (error) {
            }
        })();
    }
}

module.exports = characterController
