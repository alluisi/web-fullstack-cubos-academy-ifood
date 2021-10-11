const conexao = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenHash = require('../tokenHash');

async function login(req,res) {
    const {email, senha} = req.body;

    if (!email || !senha) {
        return res.status(400).json({mensagem: "E-mail e senha devem ser informados."});
    }

    try {
        const {rowCount, rows} = await conexao.query('select * from usuarios where email = $1', [email]);

        if (rowCount <= 0) {
            return res.status(400).json({mensagem: "E-mail e/ou senha inválidos."});
        }

        const usuario = rows[0];

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(400).json({mensagem: "E-mail e/ou senha inválidos."});
        }

        const token = jwt.sign({id: usuario.id}, tokenHash, { expiresIn: '2h'});

        return res.status(200).json({token});
    }
    catch (error) {
        return res.status(500).json({mensagem: "Ocorreu um erro inesperado. - " + error.message});
    }
}

module.exports = {
    login
}