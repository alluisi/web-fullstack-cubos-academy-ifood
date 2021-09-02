const express = require("express");
const roteador = require("./roteador");
const { travaDeSenha } = require("./intermediarios");

const app = express();

app.use(express.json());
app.use(travaDeSenha);
app.use(roteador);

app.listen(8000);

// http://localhost:8000/alunos?senha=cubos123