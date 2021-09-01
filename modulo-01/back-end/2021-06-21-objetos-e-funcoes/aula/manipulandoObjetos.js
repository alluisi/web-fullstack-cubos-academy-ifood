const pessoa = {
    nome: "Alessandra",
    idade: 40,
    altura: 1.69,
    temCNH: true,
    apelidos: ["Leca", "Ale"]
}

pessoa.nome = "Aline";
pessoa.idade = 30;
pessoa.altura = 1.71;
pessoa.apelidos[0] = "Line";
pessoa.apelidos[1] = "";

pessoa.peso = 70;

console.log(pessoa);