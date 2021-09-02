const express = require("express");
const axios = require("axios");
const fs = require("fs/promises");

const app = express();
app.use(express.json());

app.get("/enderecos/:cep", async (req, res) => {
    const cep = req.params.cep;

    if (!cep) {
        res.status(400).json({ mensagem: "Um cep deve ser informado." });
        return;
    };

    const enderecos = JSON.parse(await fs.readFile('enderecos.json'));


    const cepComTraco = `${cep.substr(0, 5)}-${cep.substr(5, 3)}`;
    const enderecoEncontrado = enderecos.find(e => e.cep === cepComTraco);

    if (enderecoEncontrado) {
        res.json(enderecoEncontrado);
        return;
    };

    const { data: enderecoEncontradoViaCep } = (await axios.get(`https://viacep.com.br/ws/${cep}/json/`));

    if (enderecoEncontradoViaCep) {
        if (!enderecoEncontradoViaCep.erro) {
            enderecos.push(enderecoEncontradoViaCep);

            await fs.writeFile('enderecos.json', JSON.stringify(enderecos));
        } else {
            return res.json({ mensagem: "Cep não encontrado." })
        };
    };

    res.json(enderecoEncontradoViaCep);
});

app.get("/enderecos/:uf/:cidade/:logradouro", async (req, res) => {
    const { uf, cidade, logradouro } = req.params;

    const enderecos = JSON.parse(await fs.readFile('enderecos.json'));

    const enderecoEncontrado = enderecos.find(e => e.logradouro.includes(logradouro));

    if (enderecoEncontrado) {
        res.json(enderecoEncontrado);
        return;
    };

    const { data: enderecoEncontradoViaCep } = (await axios.get(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`));

    if (enderecoEncontradoViaCep) {
        if (!enderecoEncontradoViaCep.erro) {
            enderecos.push(enderecoEncontradoViaCep);

            await fs.writeFile('enderecos.json', JSON.stringify(enderecos));
        } else {
            return res.json({ mensagem: "Cep não encontrado." })
        };
    };

    res.json(enderecoEncontradoViaCep);
});

app.listen(8000);