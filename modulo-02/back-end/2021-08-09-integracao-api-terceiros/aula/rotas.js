const express = require("express");
const pedidos = require("./controladores/pedidos");


const rotas = express();

rotas.post("/criar-pedido", pedidos.criarPedido);

rotas.get("/consultar-pedido/:id", pedidos.consultarPedido);

module.exports = rotas;