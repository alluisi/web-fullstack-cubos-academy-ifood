const fs = require("fs");

/* Sync
const conteudo = fs.readFileSync("4-texto.txt").toString();
fs.writeFileSync("novoTexto.txt", conteudo);
*/

// Async
fs.readFile("4-texto.txt", (err, data) => {
    if (err) {
        console.log("Erro:", err);
    } else {
        console.log("Leu sucesso");
        fs.writeFile("4-novoTexto1.txt", data, (err) => {
            if (err) {
                console.log("Erro na escrita:", err);
            } else {
                console.log("Escreveu com sucesso 1");
            }
        });
        fs.writeFile("4-novoTexto2.txt", data, (err) => {
            if (err) {
                console.log("Erro na escrita:", err);
            } else {
                console.log("Escreveu com sucesso 2")
            }
        });
    }
});