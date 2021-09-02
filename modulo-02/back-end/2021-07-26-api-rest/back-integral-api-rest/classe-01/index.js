const express = require("express");

const app = express();
app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {
    const convidado = req.query.nome;
    if (convidado) {
        if (convidados.includes(convidado)) {
            res.json({ "mensagem": "Convidado presente." });
        } else {
            res.json({ "mensagem": "O convidado buscado não está presente na lista." });
        }
    } else {
        res.json(convidados);
    }
});

// http://localhost:8000/convidados
// http://localhost:8000/convidados?nome=Renato
// http://localhost:8000/convidados?nome=Carlos

app.post("/convidados", (req, res) => {
    const novoConvidado = { nome: req.body.nome };
    if (convidados.includes(novoConvidado.nome)) {
        res.json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });
    } else {
        convidados.push(novoConvidado.nome);
        res.json({ "mensagem": "Convidado adicionado." });
    }
});

/*
{
    "nome": "Amanda"
}
{
    "nome": "Gabriel"
}
*/

app.delete("/convidados/:nome", (req, res) => {
    const convidado = req.params.nome;
    const indice = convidados.indexOf(convidado);

    if (convidados.includes(convidado)) {
        convidados.splice(indice, 1);
        res.json({ "mensagem": "Convidado removido." });
    } else {
        res.json({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." });
    }
});

// http://localhost:8000/convidados/Fernando
// http://localhost:8000/convidados/Juliana

app.listen(8000);