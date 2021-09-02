const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let contador = 0;

app.get('/', (req, res) => {
    if (contador < jogadores.length) {
        res.send(`É a vez de ${jogadores[contador]} jogar!`);
        contador++;
    } else {
        contador = 0;
        res.send(`Nova rodada.<br>É a vez de ${jogadores[contador]} jogar!`);
        contador++;
    }
});

app.get('/remover', (req, res) => {
    const posicao = Number(req.query.indice);
    if (posicao < 0 || posicao >= jogadores.length) {
        res.send(`Não existe jogador no índice informado (${String(posicao)}) para ser removido.`);
    } else {
        jogadores.splice(posicao, 1);
        res.send(jogadores);
    };
});

app.get('/adicionar', (req, res) => {
    let novoJogador = req.query.nome;
    const primeiraLetra = novoJogador[0];
    const primeiraMaiuscula = primeiraLetra.toUpperCase();
    novoJogador = primeiraMaiuscula + novoJogador.slice(1);
    const posicao = Number(req.query.indice);
    if (posicao < 0 || posicao >= jogadores.length) {
        res.send(`O índice informado (${String(posicao)}) não existe no array. Novo jogador não adicionado.`);
    } else if (posicao == 0 || posicao) {
        jogadores.splice(posicao, 0, novoJogador);
        res.send(jogadores);
    } else {
        jogadores.push(novoJogador);
        res.send(jogadores);
    };
});

app.listen(8000);

/*
http://localhost:8000
http://localhost:8000/remover?indice=2
http://localhost:8000/adicionar?nome=luiza
http://localhost:8000/adicionar?nome=luiza&indice=2
http://localhost:8000/adicionar?nome=luiza&indice=80
*/