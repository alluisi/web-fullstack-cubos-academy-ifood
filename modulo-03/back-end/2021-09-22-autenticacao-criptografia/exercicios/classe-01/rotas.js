const express = require('express');
const usuarios = require('./controladores/usuarios');
const pokemons = require('./controladores/pokemons');

const rotas = express();

// cadastro de usuario
rotas.post('/usuarios', usuarios.cadastrarUsuario);

// login
rotas.post('/login', usuarios.login);

// pokemons
rotas.get('/pokemons', pokemons.listarPokemons);
rotas.get('/pokemons/:id', pokemons.obterPokemon);
rotas.post('/pokemons', pokemons.cadastrarPokemon);
rotas.patch('/pokemons/:id', pokemons.atualizarPokemon);
rotas.delete('/pokemons/:id', pokemons.excluirPokemon);

module.exports = rotas;