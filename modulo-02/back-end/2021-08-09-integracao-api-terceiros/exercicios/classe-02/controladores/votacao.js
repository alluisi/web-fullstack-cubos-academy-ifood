const axios = require('axios');
const fs = require('fs/promises');

async function registrarVoto(req, res) {
    const pais = req.params.pais;
    const ip = req.params.ip;
    const voto = req.body.voto;

    if (voto === undefined || voto === null || typeof voto !== 'boolean') {
        res.status(400).json({ mensagem: "Um objeto com valor válido em propriedade boolean 'voto' deve ser enviado no corpo da requisição." });
        return;
    }

    let ipGeoLocationResponse;

    try {
        ipGeoLocationResponse = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=58cafbe4558f425d8e8c731e3b26fbe0&ip_address=${ip}`);
    }
    catch (error) {
        if (error.response.data && error.response.data.error && error.response.data.error.code === "validation_error" &&
            error.response.data.error.details && error.response.data.error.details.ip_address &&
            error.response.data.error.details.ip_address.includes("Invalid IP Address.")) {
            res.status(400).json({ mensagem: "Deve ser informado um endereço IP válido no parâmetro 'ip'." });
            return;
        }
    }

    if (ipGeoLocationResponse.data && ipGeoLocationResponse.data.country) {
        if (ipGeoLocationResponse.data.country.toLowerCase() === pais.toLowerCase()) {
            const votosRegistrados = JSON.parse(await fs.readFile('./dados/votos.json'));

            votosRegistrados.push({
                ip,
                voto
            });

            fs.writeFile('./dados/votos.json', JSON.stringify(votosRegistrados, null, 2));
        }
        else {
            res.status(400).json({ mensagem: "A localização do endereço IP não coincide com o local da votação" });
            return;
        }
    }

    res.status(201).send();
}

async function consultarVotos(req, res) {
    const votosRegistrados = JSON.parse(await fs.readFile('./dados/votos.json'));

    res.json(votosRegistrados);
}

module.exports = { registrarVoto, consultarVotos };