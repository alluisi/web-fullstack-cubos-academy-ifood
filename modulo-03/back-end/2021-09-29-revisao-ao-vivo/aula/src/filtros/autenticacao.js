const conexao = require('../conexao');
const jwt = require('jsonwebtoken');
const tokenHash = require('../tokenHash');

async function validaToken(req, res, next) {
    const {token} = req.query;

    if (!token) {
        return res.status(401).json({mensagem: "Para acessar este recurso é necessário estar autenticado e fornecer token válido."});
    }

    try {
        const { id } = jwt.verify(token, tokenHash);

        const {rowCount, rows} = await conexao.query('select * from usuarios where id = $1', [id]);

        if (rowCount <= 0) {
            return res.status(401).json({mensagem: "O usuário logado não foi encontrado."});
        }

        const {senha, ...usuario} = rows[0];

        req.usuario = usuario;

        return next();
    }
    catch (error) {
        return res.status(401).json({mensagem: "Para acessar este recurso é necessário estar autenticado e fornecer token válido."});
    }
}

module.exports = {
    validaToken
}