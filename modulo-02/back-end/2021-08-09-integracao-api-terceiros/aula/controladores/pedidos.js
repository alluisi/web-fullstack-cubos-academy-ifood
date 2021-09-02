const instanciaAxios = require("../servicos/pagarme");

const criarPedido = async (req, res) => {
    const { body } = req;

    try {
        /*
        if (!body.amount) {
            return res.status(400).json({
                erro: "o valor do pedido não foi informado"
            });
        }
        */
        const pedido = await instanciaAxios.post("transactions", body);
        return res.json(pedido.data);
    } catch (error) {
        const { data: { errors }, status } = error.response;
        return res.status(status).json({
            erro: `${errors[0].parameter_name} - ${errors[0].message}`
        });
    };
};

const consultarPedido = async (req, res) => {
    const { id } = req.params;

    try {
        const pedido = await instanciaAxios.get(`transactions/${id}`);
        return res.json(pedido.data);
    } catch (error) {
        return res.status(status).json({
            erro: `${errors[0].parameter_name} - ${errors[0].message}`
        });
    };
};

module.exports = {
    criarPedido,
    consultarPedido
};