const express = require('express');
const rotas = express();

const filtroLogin = require('./filtros/filtroLogin');
const autenticacao = require('./controladores/autenticacao');
const usuario = require('./controladores/usuarios');

rotas.post('/usuarios', usuario.cadastrarUsuario);

rotas.post('/login', autenticacao.login);

rotas.use(filtroLogin);

rotas.get('/perfil', usuario.obterPerfilUsuario);
rotas.put('/perfil', usuario.atualizarPerfilUsuario);

module.exports = rotas;