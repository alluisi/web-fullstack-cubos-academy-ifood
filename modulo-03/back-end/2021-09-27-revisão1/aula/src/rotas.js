const express = require('express');
const { cadartrarUsuario } = require('./controladores/usuarios');
const { login } = require('./controladores/login');
const {
    cadastrarPostagem,
    atualizarPostagem,
    excluirPostagem,
    todasAsPostagem,
    postagemUsuario
} = require('./controladores/postagens');
const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();

// Cadastro de usuário
rotas.post('/usuarios', cadartrarUsuario);

// Login
rotas.post('/login', login);

// Feed principal
rotas.get('/', todasAsPostagem);

rotas.use(verificaLogin);

// Postagens
rotas.get('/postagens', postagemUsuario);
rotas.post('/postagens', cadastrarPostagem);
rotas.patch('/postagens/:id', atualizarPostagem);
rotas.delete('/postagens/:id', excluirPostagem);

module.exports = rotas;