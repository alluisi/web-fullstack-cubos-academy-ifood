const knex = require('../conexao');
const nodemailer = require('../nodemailer');

const cadastrarEmail = async (req, res) => {
    const { nome, email } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório.");
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório.");
    }

    try {
        const emailExistente = await knex('emails').where({ email }).first();

        if (emailExistente) {
            return res.status(400).json("Já existe cadastro com esse e-mail."); w
        }

        const emailCadastrado = await knex('emails').insert({ email, nome });

        if (!emailCadastrado) {
            return res.status(400).json('Não foi possivel cadastrar o email');
        }

        return res.status(200).json('Email cadastrado com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const enviarEmails = async (req, res) => {
    const { texto } = req.body;

    if (!texto) {
        return res.status(404).json("O campo email é obrigatório.");
    }

    try {
        const emails = await knex('emails');

        for (const email of emails) {
            const dadosEnvio = {
                from: 'Newsletter <nao-responder@alunoscubosacademy.com.br>',
                to: email.email,
                subject: 'Notícias',
                template: 'newsletter',
                context: {
                    nome: email.nome,
                    texto
                }
            }

            nodemailer.sendMail(dadosEnvio);
        }

        return res.status(200).json('Newsletter enviada com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarEmail,
    enviarEmails
}