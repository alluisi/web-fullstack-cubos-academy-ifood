const express = require("express");

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

app.get("/livros", (req, res) => {
    res.json(livros);
});

// http://localhost:8000/livros

app.get("/livros/:idConsultado", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.idConsultado));
    if (livro) {
        res.json(livro);
    } else if (!Number(req.params.idConsultado)) {
        res.json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." });
    } else {
        res.json({ "mensagem": "Não existe livro para o ID informado." });
    }
});

// http://localhost:8000/livros/2
// http://localhost:8000/livros/teste
// http://localhost:8000/livros/8

let proximoId = 3;

app.post("/livros", (req, res) => {
    const novoLivro = {
        id: proximoId,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: Number(req.body.ano),
        numPaginas: Number(req.body.numPaginas)
    };

    livros.push(novoLivro);

    proximoId++;

    res.json(novoLivro);
});

/*
{ 
    "titulo": "Jonas e a pedra sentimental",
    "autor": "Clarice Crawling",
    "ano": "2015",
    "numPaginas": 184
}
*/

app.put("/livros/:idConsultado", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.idConsultado));

    if (livro) {
        livro.titulo = req.body.titulo;
        livro.autor = req.body.autor;
        livro.ano = Number(req.body.ano);
        livro.numPaginas = Number(req.body.numPaginas);
        res.json({ "mensagem": "Livro substituído." });
    } else {
        res.json({ "mensagem": "Não existe livro a ser substituído para o ID informado." });
    };
});

/*
http://localhost:8000/livros/2
{
  "titulo": "Jonas e a pedra sentimental",
  "autor": "Clarice Crawling",
  "ano": "2015",
  "numPaginas": 184
}
*/

app.patch("/livros/:idConsultado", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.idConsultado));

    if (livro) {
        livro.titulo = req.body.titulo ? req.body.titulo : livro.titulo;
        livro.autor = req.body.autor ? req.body.autor : livro.autor;
        livro.ano = req.body.ano ? Number(req.body.ano) : livro.ano;
        livro.numPaginas = req.body.numPaginas ? Number(req.body.numPaginas) : livro.numPaginas;
        res.json({ "mensagem": "Livro alterado." });
    } else {
        res.json({ "mensagem": "Não existe livro a ser alterado para o ID informado." });
    };
});

/*
http://localhost:8000/livros/1
{
    "titulo": "Jonas, o Guerreiro"
}
*/

app.delete("/livros/:idConsultado", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.idConsultado));
    const indice = livros.indexOf(livro);

    if (livro) {
        livros.splice(indice, 1);
        res.json({ "mensagem": "Livro removido." });
    } else {
        res.json({ "mensagem": "Não existe livro a ser removido para o ID informado." });
    };
});

/*
http://localhost:8000/livros/1
*/

app.listen(8000);