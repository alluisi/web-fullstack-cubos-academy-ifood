const conexao = require('../conexao');

const listarLivros = async (req, res) => {
    try {
        const { rows: livros } = await conexao.query('select l.id, a.nome as nome_autor, l.nome, l.genero, l.editora, l.data_publicacao from livros l left join autores a on l.autor_id = a.id');

        return res.status(200).json(livros);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterLivro = async (req, res) => {
    const { id } = req.params;

    try {
        const livro = await conexao.query('select * from livros where id = $1', [id]);

        if (livro.rowCount === 0) {
            return res.status(404).json('Livro não encontrado');
        }

        return res.status(200).json(livro.rows[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarLivro = async (req, res) => {
    const { autor_id, nome, genero, editora, data_publicacao } = req.body;

    if (!autor_id) {
        return res.status(400).json('O campo autor_id é obrigatório');
    }

    if (!nome) {
        return res.status(400).json('O campo nome é obrigatório');
    }

    if (!genero) {
        return res.status(400).json('O campo genero é obrigatório');
    }

    try {
        const livro = await conexao.query('insert into livros (autor_id, nome, genero, editora, data_publicacao) values ($1, $2, $3, $4, $5)', [autor_id, nome, genero, editora, data_publicacao]);

        if (livro.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar o livro');
        }

        return res.status(200).json('Livro cadastrado com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarLivro = async (req, res) => {
    const { autor_id, nome, genero, editora, data_publicacao } = req.body;
    const { id } = req.params;

    if (!autor_id) {
        return res.status(400).json('O campo autor_id é obrigatório');
    }

    if (!nome) {
        return res.status(400).json('O campo nome é obrigatório');
    }

    if (!genero) {
        return res.status(400).json('O campo genero é obrigatório');
    }

    try {
        const livro = await conexao.query('select * from livros where id = $1', [id]);

        if (livro.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar o livro');
        }

        const livroAtualizado = await conexao.query('update livros set autor_id = $1, nome = $2, genero = $3, editora = $4, data_publicacao = $5 where id = $6', [autor_id, nome, genero, editora, data_publicacao, id]);

        if (livroAtualizado.rowCount === 0) {
            return res.status(404).json('Não foi possível atualizar o livro');
        }

        return res.status(200).json('Livro atualizado com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirLivro = async (req, res) => {
    const { id } = req.params;

    try {
        const livro = await conexao.query('select * from livros where id = $1', [id]);

        if (livro.rowCount === 0) {
            return res.status(404).json('Livro não encontrado');
        }

        const livrosExcluido = await conexao.query('delete from livros where id = $1', [id])

        if (livrosExcluido.rowCount === 0) {
            return res.status(404).json('Não foi possível excluir o livro');
        }

        return res.status(200).json('Livro excluído com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarLivros,
    obterLivro,
    cadastrarLivro,
    atualizarLivro,
    excluirLivro
}