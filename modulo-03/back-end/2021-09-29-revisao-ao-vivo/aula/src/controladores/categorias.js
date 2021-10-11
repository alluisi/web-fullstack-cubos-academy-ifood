const conexao = require('../conexao');

async function listarCategorias(req, res) {
    const {rows: categorias} = await conexao.query('select * from categorias');
    res.json(categorias);
}

async function detalharCategoria(req, res) {
    const {id} = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({mensagem: 'O valor do parâmetro ID deve ser um número inteiro.'});
    }

    try {
        const {rows: categorias} = await conexao.query('select * from categorias where id = $1', [id]);

        res.status(200).json(categorias[0]);
    }
    catch (error) {
        return res.status(500).json({mensagem: "Ocorreu um erro inesperado. - " + error.message})
    }
}

module.exports = {
    listarCategorias,
    detalharCategoria
}