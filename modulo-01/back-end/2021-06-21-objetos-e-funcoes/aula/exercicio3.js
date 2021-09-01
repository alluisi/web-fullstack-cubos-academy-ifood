const cartao = {
    nome: "Junior",
    idade: 21,
    produtos: [
        {
            nome: "cerveja",
            precoUnitario: 9_00,
            quantidade: 4
        },
        {
            nome: "água",
            precoUnitario: 3_00,
            quantidade: 1
        },
        {
            nome: "drink",
            precoUnitario: 12_00,
            quantidade: 1
        }
    ]
}

console.log(cartao.nome);
console.log(cartao.idade);
cartao.idade = 19;
console.log(cartao.idade);
console.log(cartao.produtos[0].nome);
console.log(cartao.produtos[cartao.produtos.length - 1].precoUnitario);