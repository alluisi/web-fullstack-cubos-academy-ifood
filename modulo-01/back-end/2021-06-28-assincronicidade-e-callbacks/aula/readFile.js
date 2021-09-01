const fs = require("fs");

/*
const buffer = fs.readFileSync('./texto.txt');
console.log(buffer.toString());
*/

console.log("Vou começar a ler o arquivo");
fs.readFile('./texto.txt', function (err, data) {
    if (!err) {
        console.log(data.toString())
    }
});
console.log("Lendo ainda");
