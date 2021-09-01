/*
    Propósito: Preencher uma string até alcançar o COMPRIMENTO desejado.
               O preenchimento é aplicado antes do primeiro caracter
    Retorno: string
    Parâmetro: sepator (divisor das quebras) - OPCIONAL
    Altera o objeto original: Nãooooo
    Retorna a alteração: Sim
*/

const palavra = 'lelepipedo';

const palavraCorrigida = palavra.padStart(14, 'para');

// console.log(palavra);
// console.log(palavraCorrigida);

const palavraCorrigida2 = palavra.padStart(18, 'para');

// console.log(palavra);
// console.log(palavraCorrigida2);

const palavraCorrigida3 = palavra.padStart(20, 'para');

// console.log(palavra);
// console.log(palavraCorrigida3);

const numeros = [1, 2, 3, 15, 16, 33, 59];

for (numero of numeros) {
    console.log(numero.toString().padStart(4, '0'));
    //console.log(numero.toString().padEnd(4, '0'));
}