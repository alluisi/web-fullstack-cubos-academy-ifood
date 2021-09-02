const instanciaAxios = require("../datas/abstract");
const fs = require('fs/promises');

const adicionar = async (arquivo, retorno) => {
    arquivo.push(retorno.data);
    fs.writeFile("./dados/empresas.json", JSON.stringify(arquivo, null, "\t"));
}

const consultarEmpresa = async (req, res) => {
    const { dominioEmpresa } = req.params;

    const arquivo = JSON.parse(await fs.readFile('./dados/empresas.json'));

    for (let item of arquivo) {
        if (item.domain === dominioEmpresa) {
            return res.json(item);
        }
    }

    const retorno = await instanciaAxios.get("", {
        params: {
            domain: dominioEmpresa,
        }
    });

    adicionar(arquivo, retorno);

    res.json(retorno.data);
};

module.exports = { consultarEmpresa };