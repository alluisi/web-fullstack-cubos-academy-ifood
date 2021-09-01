/*
    Propósito: Retornar parte de uma string (especificando a qtd. de caracteres)
    Retorno: string
    Parâmetro: start (índice inicial) - obrigatório, length (qtd. de caracteres) - opcional
    Altera o objeto original: Não
    Retorna a alteração: Sim
*/

const textoOriginal = 'paralelepipedo';

// length = 4
const fatia = textoOriginal.substr(4, 4);

// console.log(textoOriginal);
// console.log(fatia);

const fatia2 = textoOriginal.substr(4);

console.log(textoOriginal);
console.log(fatia2);