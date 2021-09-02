const alunos = require("../dados/alunos");
const cursos = require("../dados/cursos");

function consultarListaDeAlunos(req, res) {
    res.status(200);
    res.json(alunos);
};

function consultarUmAluno(req, res) {
    const identificador = Number(req.params.idConsultado)
    const aluno = alunos.find(aluno => aluno.id === identificador);

    if (!identificador || identificador <= 0) {
        res.status(400);
        res.json({ erro: "O ID deve ser um número válido." });
        return;
    }

    if (!aluno) {
        res.status(404);
        res.json({ erro: "O aluno " + req.params.idConsultado + " não foi encontrado." });
        return;
    }
    res.status(200);
    res.json(aluno);
};


let proximoId = 1;

function validarAluno(aluno) {
    if (!aluno.nome || aluno.nome === "") {
        return "O campo 'nome' é obrigatório."
    }

    if (!aluno.sobrenome || aluno.sobrenome === "") {
        return "O campo 'sobrenome' é obrigatório."
    }

    if (!aluno.idade) {
        return "O campo 'idade' é obrigatório.";
    }

    if (!aluno.curso || aluno.curso === "") {
        return "O campo 'curso' é obrigatório.";
    }

    if (typeof aluno.nome !== "string") {
        return "O campo 'nome' deve ser preenchido com um texto.";
    }

    if (typeof aluno.sobrenome !== "string") {
        return "O campo 'sobrenome' deve ser preenchido com um texto.";
    }

    if (typeof aluno.idade !== "number") {
        return "O campo 'idade' deve ser preenchido com um número.";
    }

    if (typeof aluno.curso !== "string") {
        return "O campo 'curso' deve ser preenchido com um texto.";
    }

    if (aluno.idade < 18) {
        return "O aluno deve ser maior de idade.";
    }

    if (!cursos.includes(aluno.curso)) {
        return "Curso inválido.";
    }
}

function criarAluno(req, res) {
    const erro = validarAluno(req.body);

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    const novoAluno = {
        id: proximoId,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        curso: req.body.curso
    };

    alunos.push(novoAluno);

    proximoId++;

    res.status(201);
    res.json(novoAluno);
};

function excluirAluno(req, res) {
    const identificador = Number(req.params.idConsultado);
    const aluno = alunos.find(aluno => aluno.id === identificador);

    if (!identificador || identificador <= 0) {
        res.status(400);
        res.json({ erro: "O ID deve ser um número válido." });
        return;
    }

    if (!aluno) {
        res.status(404);
        res.json({ erro: "O aluno " + req.params.idConsultado + " não foi encontrado." });
        return;
    }

    const indice = alunos.indexOf(aluno);

    alunos.splice(indice, 1);

    res.status(200);
    res.json(aluno);
};

function substituirAluno(req, res) {
    const erro = validarAluno(req.body);

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    if (req.body.id !== Number(req.params.idConsultado)) {
        res.status(400);
        res.json({ erro: "O campo 'id' deve ser igual na rota e no corpo da requisição." });
        return;
    }

    const aluno = alunos.find(aluno => aluno.id === Number(req.params.idConsultado));

    if (aluno) {
        aluno.nome = req.body.nome;
        aluno.sobrenome = req.body.sobrenome;
        aluno.idade = req.body.idade;
        aluno.curso = req.body.curso;
        res.json(aluno);
    } else {
        const novoAluno = req.body;
        alunos.push(novoAluno);
        res.json(novoAluno);
    };
};

function editarAluno(req, res) {
    const aluno = alunos.find(aluno => aluno.id === Number(req.params.idConsultado));

    if (!aluno) {
        res.status(404);
        res.json({ erro: "Aluno " + req.params.idConsultado + " não foi encontrado." });
        return;
    }

    const erro = validarAluno({
        nome: req.body.nome ?? aluno.nome,
        sobrenome: req.body.sobrenome ?? aluno.sobrenome,
        idade: req.body.idade ?? aluno.idade,
        curso: req.body.curso ?? aluno.curso
    });

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    if (req.body.nome !== undefined) {
        aluno.nome = req.body.nome;
    }

    if (req.body.sobrenome !== undefined) {
        aluno.sobrenome = req.body.sobrenome;
    }

    if (req.body.idade !== undefined) {
        aluno.idade = req.body.idade;
    }

    if (req.body.curso !== undefined) {
        aluno.curso = req.body.curso;
    }

    res.json(aluno);
};

module.exports = { consultarListaDeAlunos, consultarUmAluno, criarAluno, excluirAluno, substituirAluno, editarAluno };