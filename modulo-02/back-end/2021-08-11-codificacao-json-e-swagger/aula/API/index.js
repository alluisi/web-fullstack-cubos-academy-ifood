const express = require("express");
const roteador = require("./roteador");
const { logarRequisicao, travaDeSenha } = require("./intermediarios");

const app = express();

app.use(express.json());
app.use(logarRequisicao);
app.use(travaDeSenha);
app.use(roteador);

app.listen(8000);