const express = require('express');

const app = express();

/* PRIMEIRO SERVIDOR
app.get('/', (req, res) => {
    console.log('Recebi um GET /');

    res.send('Olá!');
});

app.get('/alessandra', (req, res) => {
    console.log('Recebi outro GET');

    res.send('Meu primeiro servidor atualizado!!!');
});
*/

/* PARÂMETROS DA ROTA
// GET /livro/1
// GET /livro/2
// GET /livro/3


app.get('/livros/1', (req, res) => {
    res.send('Livro Um');
});

app.get('/livros/2', (req, res) => {
    res.send('Livro Dois');
});

app.get('/livros/3', (req, res) => {
    res.send('Livro Três');
});


app.get('/livros/:numeros', (req, res) => {
    console.log(req.params);

    if (req.params.numeros === "1") {
        res.send('Livro Um');
    } else if (req.params.numeros === "2") {
        res.send('Livro Dois');
    } else if (req.params.numeros === "3") {
        res.send('Livro Três');
    } else {
        res.status(404);
        res.send('Livro ' + req.params.numeros + ' não existe');
    };
});
*/


/* QUERY

app.get('/soma', (req, res) => {
    console.log(req.query);
    const primeiro = Number(req.query.primeirovalor);
    const segundo = Number(req.query.segundovalor);
    res.send(String(primeiro + segundo));
});

// http://localhost:8000/soma?primeirovalor=4&segundovalor=2
*/

// CRIANDO UM CONTADOR
// GET /contador -> 4

let contador = 0;

app.get('/contador', (req, res) => {
    contador++;
    res.send('Você já abriu esta página ' + contador + ' vez(es)');
});

app.get('/zerar', (req, res) => {
    contador = 0;
    res.send('Zerei!');
});

app.get('/atribuir', (req, res) => {
    console.log('Contador era ' + contador);
    const valor = req.query.valor;

    if (valor === undefined) {
        res.status(400);
        res.send('Você precisa informar o valor');
    } else {
        contador = Number(valor);
        console.log('Contador agora é ' + contador);
        res.send('Atribuido com sucesso!');
    };
});

// http://localhost:8000/atribuir?valor=300

app.listen(8000);