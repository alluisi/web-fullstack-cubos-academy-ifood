const express = require('express');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login');
const postagens = require('./controladores/postagens');
const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();

// cadastro de usuario
rotas.post('/cadastro', usuarios.cadastrarUsuario);

// login
rotas.post('/login', login.login);

// filtro para verificar usuario logado
rotas.use(verificaLogin);

// obter e atualizar perfil do usuario logado
rotas.get('/perfil', usuarios.obterPerfil);
rotas.put('/perfil', usuarios.atualizarPerfil);

// postagens
rotas.post('/postagens', postagens.enviarPostagem);
rotas.post('/postagens/postagemId/curtir', postagens.curtirPostagem);
rotas.post('/postagens/postagemId/comentar', postagens.comentarPostagem);
rotas.get('/postagens', postagens.feed);

module.exports = rotas;