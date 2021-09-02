const fs = require("fs");

function salvarInstrutores() {
    const json = JSON.stringify(listaDeInstrutores, null, 2);
    fs.writeFileSync("dados.json", json);
}

let listaDeInstrutores;

try {
    listaDeInstrutores = JSON.parse(fs.readFileSync("dados.json").toString());
} catch {
    listaDeInstrutores = [
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
}

module.exports = {
    listaDeInstrutores,
    salvarInstrutores
};