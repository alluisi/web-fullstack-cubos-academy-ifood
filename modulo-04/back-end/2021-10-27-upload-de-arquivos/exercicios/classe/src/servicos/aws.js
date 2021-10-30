const aws = require('aws-sdk');

const s3 = new aws.S3({
    endpoint: process.env.SPACES_ENDPOINT,
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET
});

const enviarImagem = async (nome, bufferImagem) => {
    return await s3.putObject({
        Bucket: process.env.SPACES_BUCKET,
        Key: nome,
        Body: bufferImagem,
        ACL: 'public-read'
    }).promise();
}

const excluirImagem = async (nome) => {
    return await s3.deleteObject({
        Bucket: process.env.SPACES_BUCKET,
        Key: nome
    }).promise();
}

const urlCompleta = (nomeImagem) => {
    return `https://${process.env.SPACES_BUCKET}.${process.env.SPACES_ENDPOINT}/${nomeImagem}`;
}

module.exports = {
    enviarImagem,
    excluirImagem,
    urlCompleta
};