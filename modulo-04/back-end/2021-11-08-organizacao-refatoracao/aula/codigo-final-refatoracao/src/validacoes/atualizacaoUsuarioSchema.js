const yup = require('./yup');

const atualizacaoUsuarioSchema = yup.object().shape({
    email: yup
        .string()
        .email(),

    senha: yup
        .string(),

    nome: yup
        .string(),

    nome_loja: yup
        .string()
});

module.exports = atualizacaoUsuarioSchema;