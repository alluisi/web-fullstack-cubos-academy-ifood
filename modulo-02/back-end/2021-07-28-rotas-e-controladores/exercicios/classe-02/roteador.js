const express = require("express");
const alunos = require("./controladores/alunos");

const roteador = express();

roteador.get("/alunos", alunos.consultarListaDeAlunos);
roteador.get("/alunos/:idConsultado", alunos.consultarUmAluno);
roteador.post("/alunos", alunos.criarAluno);
roteador.delete("/alunos/:idConsultado", alunos.excluirAluno);
roteador.put("/alunos/:idConsultado", alunos.substituirAluno);
roteador.patch("/alunos/:idConsultado", alunos.editarAluno);

module.exports = roteador;