const express = require('express');
const uploads = require('./controladores/uploads');

const rotas = express();

rotas.post('/upload', uploads.uploadImagem);
rotas.post('/delete', uploads.excluirImagem);

module.exports = rotas;