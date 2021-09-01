/*
    Propósito: Quebrar uma string em pedaços, retornando os pedaços num array
    Retorno: array
    Parâmetro: sepator (divisor das quebras) - OPCIONAL
    Altera o objeto original: Não
    Retorna a alteração: Sim
*/

const frase = 'O Leo é o melhor professor da casa dele.'

const fraseComoItemDeArray = frase.split();

// console.log(Array.isArray(fraseComoItemDeArray));
// console.log(fraseComoItemDeArray);

// string vazia = quebra a frase toda, caracter por caracter,
// cada um como item do array
const fraseComoArray = frase.split('');

// console.log(Array.isArray(fraseComoArray));
// console.log(fraseComoArray);


const cadaPalavraComoItemDeArray = frase.split(' ');

// console.log(Array.isArray(cadaPalavraComoItemDeArray));
// console.log(cadaPalavraComoItemDeArray);


const quebraNoPro = frase.split('pro');

console.log(Array.isArray(quebraNoPro));
console.log(quebraNoPro);