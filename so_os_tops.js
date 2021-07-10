/* SÓ OS TOPS!
No e-commerce em que você trabalha são vendidos os mais diferentes tipos de produtos. Produtos que custam mais de 100 reais são considerados TOP DE LINHA.

O gerente comercial da empresa, também conhecido como SEU CHEFE, quer saber duas coisas:

Quantos reais a empresa faturou através da venda de produtos TOP DE LINHA.
Quantos % do faturamento total da empresa a venda de produtos TOP DE LINHA representa.
Como a lista de produtos é muito grande, não é possível fazer esse cálculo manualmente. Faça um programa que calcule as informações pedidas por seu chefe.

Input Format

A entrada será sempre um array contendo vários objetos. Cada objeto representa um produto (que pode ou não ser TOP DE LINHA). Assim a entrada será como no exemplo abaixo:

[
{
    nome: "Camiseta",
    preco: 7000 // em centavos
},
{
    nome: "Tenis",
    preco: 8000 // em centavos
},
{
    nome: "Relogio",
    preco: 15000 // em centavos
}
]
Lembre-se sempre que os valores monetários são sempre em centavos, para que fiquem representados como números inteiros.

Output Format

Imprima na tela apenas um objeto no formato abaixo (chame console.log() passando como argumento a variável que armazena o seu objeto de resposta):

{
    totalTop: 15000,
    percentual: 0.5
}
Sample Input 0

[
  {
    "nome": "Camiseta",
    "preco": 7000
  },
  {
    "nome": "Tenis",
    "preco": 8000
  },
  {
    "nome": "Relogio",
    "preco": 15000
  }
]
Sample Output 0

{ totalTop: 15000, percentual: 0.5 }
*/

function solucao(produtos) {
    let faturamento = {
        totalTop: 0,
        percentual: 0
    };
    let top = 0;
    let geral = 0;

    for (let item of produtos) {
        geral += item.preco;
        if (item.preco > 10000) {
            top += item.preco;
        }
    }
    faturamento.totalTop = top;
    faturamento.percentual = top / geral;

    console.log(faturamento);
}

solucao([
    {
        "nome": "Camiseta",
        "preco": 7000
    },
    {
        "nome": "Tenis",
        "preco": 8000
    },
    {
        "nome": "Relogio",
        "preco": 15000
    }
]);