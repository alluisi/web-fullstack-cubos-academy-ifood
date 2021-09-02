const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
    console.log("oioi");
    // É necessário sempre enviar uma resposta
    res.send("oi");
    // ou
    res.json({
        saudacao: "oi"
    });
});

app.listen(8000);