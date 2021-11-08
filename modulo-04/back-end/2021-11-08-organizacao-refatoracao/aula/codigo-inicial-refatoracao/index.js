const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

const hash = 'uV9R6dJBs7erwsBw8giLZyexOjw';

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'sistema_cadastro'
    }
});

// endpoint para cadastro de usuario
app.post('/usuarios', async (req, res) => {
    const {
        nome,
        email,
        senha,
        nome_loja
    } = req.body;

    if (!nome) {
        return res
            .status(404)
            .json("O campo nome é obrigatório");
    }

    if (!email) {
        return res
            .status(404)
            .json("O campo email é obrigatório");
    }

    if (!senha) {
        return res
            .status(404)
            .json("O campo senha é obrigatório");
    }

    if (!nome_loja) {
        return res.status(404)
            .json("O campo nome_loja é obrigatório");
    }

    try {
        const quantidadeUsuarios = await knex('usuarios')
            .where({ email }).first();

        if (quantidadeUsuarios) {
            return res.status(400).json("O email já existe");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await knex('usuarios')
            .insert({
                nome,
                email,
                senha: senhaCriptografada,
                nome_loja
            }).returning('*');

        if (!usuario) {
            return res
                .status(400).json("O usuário não foi cadastrado.");
        }

        return res.status(200).json(usuario[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
});

// login
app.post('/login', async (req, res) => {
    const {
        email,
        senha
    } = req.body;

    if (!email || !senha) {
        return res.status(404).json('É obrigatório email e senha');
    }

    try {
        const usuario = await knex('usuarios').where({ email }).first();

        if (!usuario) {
            return res.status(404).json('O usuario não foi encontrado');
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(400).json("Email e senha não confere");
        }

        const token = jwt.sign({ id: usuario.id }, hash, { expiresIn: '8h' });

        const { senha: _, ...dadosUsuario } = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
});

// filtro para verificar usuario logado
app.use(async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json('Não autorizado');
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const {
            id
        } = jwt.verify(token, hash);

        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json('Usuario não encontrado');
        }

        const { senha, ...usuario } = usuarioExiste;

        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
});

// obter perfil do usuario logado pelo token
app.get('/perfil', async (req, res) => {
    return res
        .status(200)
        .json(req.usuario);
});

// atualizar perfil do usuario logado
app.put('/perfil', async (req, res) => {
    let {
        nome,
        email,
        senha,
        nome_loja
    } = req.body;
    const { id } = req.usuario;

    if (!nome && !email && !senha && !nome_loja) {
        return res.status(404)
            .json('É obrigatório informar ao menos um campo para atualização');
    }

    try {
        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json('Usuario não encontrado');
        }

        if (senha) {
            senha = await bcrypt.hash(senha, 10);
        }

        if (email !== req.usuario.email) {
            const emailUsuarioExiste = await knex('usuarios')
                .where({ email })
                .first();

            if (emailUsuarioExiste) {
                res
                    .status(404).json('O Email já existe.');
                return;
            }
        }

        const usuarioAtualizado = await knex('usuarios')
            .where({ id })
            .update({
                nome,
                email,
                senha,
                nome_loja
            });

        if (!usuarioAtualizado) {
            return res.status(400).json("O usuario não foi atualizado");
        }

        res
            .status(200)
            .json('Usuario foi atualizado com sucesso.');
        return;
    } catch (error) {
        return res.status(400).json(error.message);
    }
});

app.listen(3000);