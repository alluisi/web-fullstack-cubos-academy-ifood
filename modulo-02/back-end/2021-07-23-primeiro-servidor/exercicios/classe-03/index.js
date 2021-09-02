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

app.listen(8000);

// http://localhost:8000