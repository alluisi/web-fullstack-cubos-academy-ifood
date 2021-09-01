const pessoa = {
    nome: "Alessandra",
    idade: 40,
    altura: 1.69,
    temCNH: true,
    apelidos: ["Leca", "Ale"]
}

const propriedade = "idade";
console.log(`Bem vindo(a) ${pessoa["nome"]}. Você tem ${pessoa[propriedade]} anos.`);