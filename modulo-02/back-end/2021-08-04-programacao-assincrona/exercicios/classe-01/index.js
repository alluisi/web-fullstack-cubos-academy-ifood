const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/pokemon/", async (req, res) => {
    const offset = req.query.inicio;
    const limit = req.query.quantidade;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);

    res.json({
        lista: response.data.results,
    });
});

// http://localhost:8000/pokemon/?inicio=0&quantidade=3

app.get("/pokemon/:idOuNome", async (req, res) => {
    const pokemon = req.params.idOuNome;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const { id, name, height, weight, base_experience, forms, abilities, species } = response.data;

    res.json({
        id,
        name,
        height,
        weight,
        base_experience,
        forms,
        abilities,
        species
    });
});

// http://localhost:8000/pokemon/1/
// http://localhost:8000/pokemon/bulbasaur/

app.listen(8000);