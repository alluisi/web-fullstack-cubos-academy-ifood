const pessoa = {
    nome: "Alessandra",
    idade: 40,
    altura: 1.69,
    temCNH: true,
    apelidos: ["Leca", "Ale"]
}

let cnh = "";
if (pessoa.temCNH) {
    cnh = "possui";
} else {
    cnh = "não possui";
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${cnh} CNH e os seguintes apelidos:`);

for (let item of pessoa.apelidos) {
    console.log(`- ${item}`);
}