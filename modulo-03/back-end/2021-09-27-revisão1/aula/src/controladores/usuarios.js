const conexao = require('../conexao');
const bcrypt = require('bcrypt');

const cadartrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório.');
    }

    if (!email) {
        return res.status(404).json('O campo email é obrigatório.');
    }

    if (!senha) {
        return res.status(404).json('O campo senha é obrigatório.');
    }

    try {
        const queryConsultaEmail = 'select * from usuarios where email = $1';
        const { rowCount: quantidadeUsuarios } = await conexao.query(queryConsultaEmail, [email]);

        if (quantidadeUsuarios > 0) {
            return res.status(400).json('O email informado já existe.');
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const query = 'insert into usuarios (nome, email, senha) values ($1, $2, $3)';
        const usuarioCadastrado = await conexao.query(query, [nome, email, senhaCriptografada]);

        if (usuarioCadastrado.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar o usuário.');
        }

        return res.status(200).json('Usuário cadastrado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadartrarUsuario
}