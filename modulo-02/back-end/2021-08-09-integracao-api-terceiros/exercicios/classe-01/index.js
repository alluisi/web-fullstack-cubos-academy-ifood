const express = require("express");
const rotas = require("./rotas/rotas");

const app = express();
app.use(rotas);

app.listen(8000);