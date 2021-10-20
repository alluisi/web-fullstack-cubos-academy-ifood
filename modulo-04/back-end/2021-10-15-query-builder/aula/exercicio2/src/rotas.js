const express = require('express');
const usuarios = require('./controladores/usuarios');

const rotas = express();

rotas.get('/usuarios', usuarios.listar);
rotas.get('/usuarios/:id', usuarios.obter);
rotas.post('/usuarios', usuarios.cadastrar);
rotas.put('/usuarios/:id', usuarios.atualizar);
rotas.delete('/usuarios/:id', usuarios.excluir);

module.exports = rotas;