const fs = require("fs");

const conteudo = fs.readFileSync("2-parse_stringify1.json").toString();

console.log(conteudo);
/*
{
    "nome": "André",
    "idade": 32,
    "interesse": [
        "culunária",
        "f1"
    ]
}
*/

console.log(conteudo.nome);
// undefined

const dados = JSON.parse(conteudo);
console.log(dados);
// { nome: 'André', idade: 32, interesse: [ 'culunária', 'f1' ] }

dados.interesse.push("javascript");
console.log(dados);
/*
{
  nome: 'André',
  idade: 32,
  interesse: [ 'culunária', 'f1', 'javascript' ]
}
*/

const novoConteudo1 = JSON.stringify(dados);
console.log(novoConteudo1);
// {"nome":"André","idade":32,"interesse":["culunária","f1","javascript"]}

const novoConteudo2 = JSON.stringify(dados, null, 2);
console.log(novoConteudo2);
/*
{
  "nome": "André",
  "idade": 32,
  "interesse": [
    "culunária",
    "f1",
    "javascript"
  ]
}
*/

fs.writeFileSync("2-parse_stringify2.json", novoConteudo2);