const localizacao = "salvador-ba";
const estado = localizacao.slice(-2);

const endIndex = localizacao.indexOf("-");
const cidade = localizacao.slice(0, endIndex); // ou (0, -3) ou (0, 8)

console.log(estado);
console.log(cidade);