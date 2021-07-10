/* CONTAGEM REGRESSIVA
Todo bom filme de ação que se preze deve ter uma cena em que uma bomba está prestes a explodir. O cenário é clássico: uma contagem regressiva, um fio azul, um veículo em movimento e a grande dúvida: cortar o fio vermelho ou o azul?

Faça um programa que, dado um número a partir do qual deve-se começar a contagem regressiva, imprima na tela a contagem regressiva desse número até 0. Ao final da contagem, imprima a mensagem KABUM.

Importante: cada número deve ser impresso em uma nova linha, assim como a mensagem KABUM ao final.

Input Format

A entrada será sempre um número positivo a partir do qual deve-se começar a contagem regressiva.

Output Format

Imprima na tela a contagem regressiva, colocando cada número da contagem em uma linha, incluindo o valor inicial fornecido na entrada e o zero. Na última linha, deve estar sempre a palavra KABUM

Sample Input 0

3
Sample Output 0

3
2
1
0
KABUM
Sample Input 1

10
Sample Output 1

10
9
8
7
6
5
4
3
2
1
0
KABUM
*/

function solucao(numero) {
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
    console.log("KABUM");
}

solucao(3);
solucao(10);