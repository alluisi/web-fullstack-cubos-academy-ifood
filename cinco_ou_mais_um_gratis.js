/* CINCO OU MAIS, UM É GRÁTIS
Uma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.

Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

Para que essa promoção funcionasse, foi necessário fazer uma atualização no software do caixa para que fosse possível calcular o valor correto que o cliente deve pagar.

Você ficou com essa tarefa.

Input Format

A entrada será sempre um array contendo apenas números inteiros e positivos representando o valor de cada um dos produtos (em centavos).

Output Format

Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro).

Sample Input 0

100 500 100 200 50
Sample Output 0

900
Sample Input 1

100 100 100 50
Sample Output 1

350
*/

function solucao(precos) {

    let valorSemDesconto = 0;
    let produtoMaisBarato = 0;
    let valorASerPago = 0;

    produtoMaisBarato = precos[0];

    for (let i = 0; i < precos.length; i++) {
        valorSemDesconto += precos[i];
        if (precos[i] < produtoMaisBarato) {
            produtoMaisBarato = precos[i];
        }
    }

    if (precos.length >= 5) {
        valorASerPago = valorSemDesconto - produtoMaisBarato;
    } else {
        valorASerPago = valorSemDesconto;
    }

    console.log(valorASerPago);
}

solucao([100, 500, 100, 200, 50]);
solucao([100, 100, 100, 50]);