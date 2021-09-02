const express = require("express");
const imoveis = require("./controladores/imoveis");

const roteador = express();

roteador.get("/imoveis", imoveis.consultarTodosOsImoveis);
roteador.get("/imoveis/:idConsultado", imoveis.consultarUmImovel);

module.exports = roteador;