const imoveis = require("../dados/imoveis");

function consultarTodosOsImoveis(req, res) {
    res.json(imoveis);
};

function consultarUmImovel(req, res) {
    const imovel = imoveis.find(imovel => imovel.id === Number(req.params.idConsultado));
    res.json(imovel);
};

module.exports = { consultarTodosOsImoveis, consultarUmImovel };