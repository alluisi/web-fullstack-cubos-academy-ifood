function travaDeSenha(req, res, next) {
    if (req.query.senha === "cubos123") {
        next();
    } else {
        res.status(401);
        res.json({ erro: "A senha está incorreta" });
    }
};

module.exports = { travaDeSenha };