const express = require('express');
const controladorProdutos = require('./controladores/produtos');
const controladorCategorias = require('./controladores/categorias');
const controladorUsuario = require('./controladores/usuario');
const controladorLogin = require('./controladores/login');
const filtroAutenticacao = require('./filtros/autenticacao');

const rotas = express();

// Usuários
rotas.post('/usuario', controladorUsuario.cadastrarUsuario);

// Loging
rotas.post('/login', controladorLogin.login);

// Validação de autenticação
rotas.use(filtroAutenticacao.validaToken);

// Produtos
rotas.get('/produtos', controladorProdutos.listarProdutos);
rotas.get('/produtos/:id', controladorProdutos.detalharProduto);

// Categorias
rotas.get('/categorias', controladorCategorias.listarCategorias);
rotas.get('/categorias/:id', controladorCategorias.detalharCategoria);

module.exports = rotas;