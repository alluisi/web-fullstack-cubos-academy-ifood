const express = require("express");
const axios = require("axios");

const app = express();

/*
app.get("/descrever/:pacote", (req, res) => {
    const pacote = req.params.pacote;

    const promise = axios.get(`https://registry.npmjs.com/${pacote}`);

    promise.then((response) => {
        res.json({
            descricao: response.data.description,
        });
    });
});
*/

app.get("/descrever/:pacote", async (req, res) => {
    const pacote = req.params.pacote;

    const response = await axios.get(`https://registry.npmjs.com/${pacote}`);

    res.json({
        descricao: response.data.description,
    });

});

app.listen(8080);