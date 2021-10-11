const conexao = require('../conexao');

async function listarProdutos(req, res) {
    const {rows: produtos} = await conexao.query('select * from produtos');
    res.json(produtos);
}

async function detalharProduto(req, res) {
    console.log(req.usuario);
    const {id} = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({mensagem: 'O valor do parâmetro ID deve ser um número inteiro.'});
    }

    try {
        const {rows: produtos} = await conexao.query('select * from produtos where id = $1', [id]);

        res.status(200).json(produtos[0]);
    }
    catch (error) {
        return res.status(500).json({mensagem: "Ocorreu um erro inesperado. - " + error.message})
    }
}

module.exports = {
    listarProdutos,
    detalharProduto
}