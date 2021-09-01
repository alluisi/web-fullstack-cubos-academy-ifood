/* APENAS PARA MAIORES
Numa determinada festa é permitida a entrada apenas de pessoas maiores de idade. Você, que é uma pessoa programadora que trabalha na empresa que está produzindo a festa, deve fazer um programa que, dada a idade da pessoa na tela, informe se a pessoa pode entrar ou deve ser barrada.

Input Format

A entrada do problema será sempre uma variável idade do tipo number. Essa idade é sempre um número inteiro e positivo.

Output Format

Você deve imprimir na tela PODE ENTRAR caso a pessoa seja maior de idade (ou seja, tenha 18 anos ou mais).

Caso a pessoa seja menor de idade imprima na tela ACESSO NEGADO

Sample Input 0

18
Sample Output 0

PODE ENTRAR
Sample Input 1

10
Sample Output 1

ACESSO NEGADO
*/

function solucao(idade) {
    if (idade >= 18) {
        console.log("PODE ENTRAR");
    } else {
        console.log("ACESSO NEGADO");
    }
}

solucao(18);
solucao(10);