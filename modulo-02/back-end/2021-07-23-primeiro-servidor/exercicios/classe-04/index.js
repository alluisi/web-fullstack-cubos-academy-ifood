const express = require('express');

const app = express();

app.get('/somar', (req, res) => {
    console.log(req.query);
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro + segundo));
});

app.get('/subtrair', (req, res) => {
    console.log(req.query);
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro - segundo));
});

app.get('/multiplicar', (req, res) => {
    console.log(req.query);
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro * segundo));
});

app.get('/dividir', (req, res) => {
    console.log(req.query);
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro / segundo));
});

app.listen(8000);

/*
http://localhost:8000/somar?num1=10&num2=5 resposta: 15
http://localhost:8000/subtrair?num1=10&num2=5 resposta: 5
http://localhost:8000/multiplicar?num1=10&num2=5 resposta: 50
http://localhost:8000/dividir?num1=10&num2=5 resposta: 2
*/