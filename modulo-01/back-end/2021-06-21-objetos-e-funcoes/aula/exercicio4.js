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
};

let total = 0;
for (let item of cartao.produtos) {
    total += item.quantidade * item.precoUnitario;
}

console.log(`${cartao.nome} o valor a ser pago é de R$${total / 100}`);