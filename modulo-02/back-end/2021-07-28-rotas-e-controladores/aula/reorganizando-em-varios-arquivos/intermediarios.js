function logarRequisicao(req, res, next) {
    console.log(req.method, req.url);
    console.log("O corpo da mensagem é:", req.body);
    /*
    console.log("Eu sou o intermediário")
    if (req.method === "DELETE") {
        res.send("Não pode!")
    }
    */
    next();
};

function travaDeSenha(req, res, next) {
    console.log("Segundo intermediário:", req.query);

    if (req.method === "GET" || req.query.senha === "123456") {
        next();
    } else {
        res.status(401);
        res.json({ erro: "senha incorreta" });
    }
};

module.exports = { logarRequisicao, travaDeSenha };