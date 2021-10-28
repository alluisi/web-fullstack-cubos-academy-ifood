const knex = require('../conexao');

const enviarPostagem = async (req, res) => {
    const { id } = req.usuario;
    const { descricao, imagem } = req.body;

    if (!imagem || imagem.length === 0) {
        return res.status(404).json("É necessário enviar ao menos uma foto.");
    }

    try {
        const postagem = await knex('postagens').insert({ descricao, usuario_id: id }).returning('*');

        if (!postagem) {
            return res.status(400).json("Não foi possível concluir a postagem.");
        }

        for (const foto of imagem) {
            foto.postagem_id = postagem[0].id;
        }

        const imagensCadastradas = await knex('postagens_fotos').insert({ imagem });

        if (!imagensCadastradas) {
            await knex('postagens').where({ id: postagem[0].id }).del();
            return res.status(400).json("Não foi possível concluir a postagem.");
        }

        return res.status(200).json("Postagem realizda com sucesso.");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const curtirPostagem = async (req, res) => {
    const { id } = req.usuario;
    const { postagemId } = req.params;

    try {
        const postagem = await knex('postagens').where({ id: postagemId }).first();

        if (!postagem) {
            return res.status(400).json("Postagem não encontrada.");
        }

        const jaCurtiu = await knex('postagens_curtidas').where({ usuario_id: id, postagem_id: postagem.id }).first();

        if (jaCurtiu) {
            return res.status(404).json("O usuário já curtiu essa postagem.");
        }

        const curtida = await knex('postagens_curtidas').insert({ usuario_id: id, postagem_id: postagem.id });

        if (!curtida) {
            return res.status(400).json("Não foi possível curtir essa postagem.");
        }

        return res.status(200).json("Postagem curtida com sucesso.");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const comentarPostagem = async (req, res) => {
    const { id } = req.usuario;
    const { postagemId } = req.params;
    const { texto } = req.body;

    if (!imagem || imagem.length === 0) {
        return res.status(404).json("Para comentar nessa postagem é necessário informar o texto.");
    }

    try {
        const postagem = await knex('postagens').where({ id: postagemId }).first();

        if (!postagem) {
            return res.status(400).json("Postagem não encontrada.");
        }

        const comentario = await knex('postagens_comentarios').insert({ texto, usuario_id: id, postagem_id: postagem.id });

        if (!comentario) {
            return res.status(400).json("Não foi possível comentar nessa postagem.");
        }

        return res.status(200).json("Postagem comentada com sucesso.");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const feed = async (req, res) => {
    const { id } = req.usuario;
    const { offset } = req.query;

    const exibir = offset ? offset : 0;

    try {
        const postagens = await knex('postagens').where('usuario_id', '!===', id).limit(10).offset(exibir);

        if (postagens.length === 0) {
            return res.status(200).json(postagens);
        }

        for (const postagem of postagens) {
            // usuário
            const usuario = await knex('usuarios').where({ id: postagem.usuario_id }).select('imagem', 'username', 'verificado').first();
            postagem.usuario = usuario;

            // fotos
            const fotos = await knex('postagens_fotos').where({ postagem_id: postagem.id }).select('imagem');
            postagem.fotos = fotos;

            // curtidas
            const curtidas = await knex('postagens_curtidas').where({ postagem_id: postagem.id }).select('usuario_id');
            postagem.curtidas = curtidas.length;

            // curtido por mim
            postagem.curtidaporMim = curtidas.find(curtida => curtida.usuario_id === id) ? true : false;

            // comentários
            const comentarios = await knex('postagens_comentarios').leftJoin('usuarios', 'usuarios.id', 'postagens_comentarios.usuario_id').where({ postagem_id: postagem.id }).select('usuarios.username', 'postagens_comentarios.texto');
            postagem.comentarios = comentarios;
        }

        return res.status(200).json(postagens);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    enviarPostagem,
    curtirPostagem,
    comentarPostagem,
    feed
}