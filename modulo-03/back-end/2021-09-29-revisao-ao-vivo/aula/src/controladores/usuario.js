const conexao = require('../conexao');
const bcrypt = require('bcrypt');

async function cadastrarUsuario(req, res) {
    const {nome, email, senha} = req.body;

    if (!nome) {
        return res.status(400).json({mensagem: "A propriedade nome é obrigatória."});
    }

    if (!email) {
        return res.status(400).json({mensagem: "A propriedade email é obrigatória."});
    }

    if (!senha) {
        return res.status(400).json({mensagem: "A propriedade senha é obrigatória."});
    }

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        await conexao.query(
            'insert into usuarios (nome, email, senha) values ($1, $2, $3)',
            [nome, email, senhaCriptografada]);
        
        return res.status(201).send();
    }
    catch (error) {
        return res.status(500).json({mensagem: "Ocorreu um erro inesperado. - " + error.message});
    }
}

module.exports = {
    cadastrarUsuario
}