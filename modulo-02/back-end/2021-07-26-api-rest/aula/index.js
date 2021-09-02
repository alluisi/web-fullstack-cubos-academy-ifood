const express = require("express");

const app = express();
app.use(express.json());

// GET /instrutores

const listaDeInstrutores = [
    {
        id: 1,
        nome: "Junior",
        idade: 29,
        areaDeAtuacao: "Logica"
    },
    {
        id: 2,
        nome: "Dina",
        idade: 19,
        areaDeAtuacao: "Back-end"
    },
    {
        id: 3,
        nome: "Guido Cerqueira",
        idade: 30,
        areaDeAtuacao: "Full-stack"
    },
    {
        id: 4,
        nome: "Victor Magalhães",
        idade: 28,
        areaDeAtuacao: "Front-end"
    }
];

let proximoId = 5;

app.get("/instrutores", (req, res) => {
    res.json(listaDeInstrutores);
});

// GET /instrutores/3

/*
app.get("/instrutores/3", (req, res) => {
    const instrutor = listaDeInstrutores[2];
    res.json(instrutor);
});
*/
app.get("/instrutores/:idConsultado", (req, res) => {
    console.log("Consultando o id", req.params.idConsultado);
    const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));
    res.json(instrutor);
});

// POST /instrutores

app.post("/instrutores", (req, res) => {
    const novoInstrutor = {
        id: proximoId,
        nome: req.body.nome,
        idade: req.body.idade,
        areaDeAtuacao: req.body.areaDeAtuacao,
    };

    listaDeInstrutores.push(novoInstrutor);

    proximoId++;

    res.json(novoInstrutor);
});

// PATCH /instrutores/3

app.patch("/instrutores/:idConsultado", (req, res) => {
    const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));

    if (req.body.nome !== undefined) {
        instrutor.nome = req.body.nome;
    }

    if (req.body.idade !== undefined) {
        instrutor.idade = req.body.idade;
    }

    if (req.body.areaDeAtuacao !== undefined) {
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
    }

    res.json(instrutor);
});

// PUT /instrutores/3

app.put("/instrutores/:idConsultado", (req, res) => {
    const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));

    if (instrutor) {
        // substituir o existente
        instrutor.nome = req.body.nome;
        instrutor.idade = req.body.idade;
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
        res.json(instrutor);
    } else {
        // inserir
        const novoInstrutor = req.body;
        listaDeInstrutores.push(novoInstrutor);
        res.json(novoInstrutor);
    };
});

// DELETE /instrutores/3

app.delete("/instrutores/:idConsultado", (req, res) => {
    const instrutor = listaDeInstrutores.find(instrutor => instrutor.id === Number(req.params.idConsultado));
    const indice = listaDeInstrutores.indexOf(instrutor);

    listaDeInstrutores.splice(indice, 1);

    res.json(instrutor);
});

app.listen(8000);