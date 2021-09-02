const express = require('express');

const app = express();

let minuto = 0;
let segundo = 0;

app.get('/', (req, res) => {
    if (segundo < 10 && minuto < 10) {
        res.send(`Tempo atual do cronômetro: 0${String(minuto)} minutos e 0${String(segundo)} segundos`);
    } else if (segundo < 10) {
        res.send(`Tempo atual do cronômetro: ${String(minuto)} minutos e 0${String(segundo)} segundos`);
    } else if (minuto < 10) {
        res.send(`Tempo atual do cronômetro: 0${String(minuto)} minutos e ${String(segundo)} segundos`);
    } else {
        res.send(`Tempo atual do cronômetro: ${String(minuto)} minutos e ${String(segundo)} segundos`);
    };
});

let intervalId = 0;
app.get('/iniciar', (req, res) => {
    segundo = 0;
    minuto = 0;
    res.send('Cronômetro iniciado!');
    intervalId = setInterval(() => {
        if (segundo == 59) {
            segundo = 0;
            minuto++;
        } else {
            segundo++
        }
    }, 1000);
});

app.get('/pausar', (req, res) => {
    res.send('Cronômetro pausado!');
    clearInterval(intervalId);
});

app.get('/continuar', (req, res) => {
    res.send('Cronômetro continuando!');
    intervalId = setInterval(() => {
        if (segundo == 59) {
            segundo = 0;
            minuto++;
        } else {
            segundo++
        }
    }, 1000);
});

app.get('/zerar', (req, res) => {
    res.send('Cronômetro zerado!');
    minuto = 0;
    segundo = 0;
});

app.listen(8000);

/*
http://localhost:8000
http://localhost:8000/iniciar
http://localhost:8000/pausar
http://localhost:8000/continuar
http://localhost:8000/zerar
*/