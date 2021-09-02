const express = require("express");
const roteador = require("./roteador");
const { logarRequisicao, travaDeSenha } = require("./intermediarios");

const app = express();

app.use(express.json());
app.use(logarRequisicao); // Intermediário
app.use(travaDeSenha); // Autenticação simples
app.use(roteador);

app.listen(8000);