const express = require("express");
const empresa = require("../controladores/empresas");


const rotas = express();

rotas.get("/empresas/:dominioEmpresa", empresa.consultarEmpresa);

module.exports = rotas;