const express = require('express');
const { registrarVoto, consultarVotos } = require('../controladores/votacao');

const roteador = express();

roteador.post('/votacao/:pais/:ip', registrarVoto);
roteador.get('/votacao', consultarVotos)

module.exports = roteador;