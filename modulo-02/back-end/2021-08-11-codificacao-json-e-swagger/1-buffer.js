const fs = require("fs");

const conteudo = fs.readFileSync("1-buffer.txt");
console.log(conteudo);
/* <Buffer 54 65 73 74 65 31 32 33 21 0d 0a>
Tabela Latin-1 ou ISO 8859
Linha 5 / Coluna 4 -> T
Linha 6 / Coluna 5 -> e
Linha 7 / Coluna 3 -> s
Linha 7 / Coluna 4 -> t
Linha 6 / Coluna 5 -> e ...
*/

const str = conteudo.toString("latin1");
console.log(str);
// Teste123!
// 

const conteudo2 = Buffer.from("Oi!", "latin1");
console.log(conteudo2);
// <Buffer 4f 69 21>

const unicode = "🤩✅🐵";
console.log(unicode);
// 🤩✅🐵
console.log(Buffer.from(unicode, "utf-8"));
// <Buffer f0 9f a4 a9 e2 9c 85 f0 9f 90 b5>

console.log(Buffer.from("Teste", "utf-8"));
// <Buffer 54 65 73 74 65>