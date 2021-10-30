const AWS = require('../servicos/aws');

const upload = async (req, res) => {
    const { imagem, nome } = req.body;

    const buffer = Buffer.from(imagem, 'base64');

    try {
        await AWS.enviarImagem(nome, buffer);

        const resposta = {
            imagem: nome,
            urlImagem: AWS.urlCompleta(nome)
        }

        return res.status(200).json(resposta);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    upload
};