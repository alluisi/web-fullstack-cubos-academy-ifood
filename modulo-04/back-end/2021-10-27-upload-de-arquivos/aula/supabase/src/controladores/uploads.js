const supabase = require('../supabase');

const uploadImagem = async (req, res) => {
    const { nome, imagem } = req.body;

    const buffer = Buffer.from(imagem, 'base64');

    try {
        const { data, error: errorData } = await supabase.storage.from(process.env.SUPABASE_BUCKET).upload(nome, buffer);

        if (errorData) {
            return res.status(400).json(errorData.message);
        }

        const { publicURL, error: errorPublicURL } = await supabase.storage.from(process.env.SUPABASE_BUCKET).upload(nome);

        if (errorPublicURL) {
            return res.status(400).json(errorPublicURL.message);
        }

        return res.status(200).json(publicURL);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirImagem = async (req, res) => {
    const { imagem } = req.body;

    try {
        const { data, error: errorData } = await supabase.storage.from(process.env.SUPABASE_BUCKET).remove([imagem]);

        if (errorData) {
            return res.status(400).json(errorData.message);
        }

        return res.status(200).json('A imagem foi removida com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    uploadImagem,
    excluirImagem
};