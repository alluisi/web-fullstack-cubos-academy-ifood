/*
const fs = require("fs");

fs.readFile("5-texto.txt", (err, data) => {
    if (err) {
        console.log("Erro:", err);
    } else {
        console.log("Leu sucesso");
        fs.writeFile("5-novoTexto.txt", data, (err) => {
            if (err) {
                console.log("Erro na escrita:", err);
            } else {
                console.log("Escreveu com sucesso ");
            }
        });
    }
});
*/

const fs = require("fs/promises");

/*
const leituraDoArquivo = fs.readFile("5-texto.txt");

console.log(leituraDoArquivo); // Promise { <pending> }

leituraDoArquivo.then((data) => {
    console.log("Terminei de ler", data.toString());
});

leituraDoArquivo.catch((err) => {
    console.log("Erro:", err);
});
*/

/*
const leituraDoArquivoEConsole = fs.readFile("5-texto.txt").then((data) => {
    console.log("Terminei de ler", data.toString());
}).catch((err) => {
    console.log("Erro:", err);
});

leituraDoArquivoEConsole.then(() => console.log("Terminou"));

console.log(leituraDoArquivoEConsole);
*/

fs.readFile("5-texto.txt")
    .then((data) => fs.writeFile("5-novoTexto.txt", data))
    .then(() => {
        console.log("Escrita completa");
    }).catch((err) => {
        console.log("Erro:", err);
    });