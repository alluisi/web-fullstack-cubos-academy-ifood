/*
    Propósito: Retornar parte de uma string
    Retorno: string
    Parâmetro: startIndex (índice inicial) - obrigatório, endIndex (índice final) - opcional
    Altera o objeto original: Não
    Retorna a alteração: Sim
*/

const textoOriginal = 'paralelepipedo';

//console.log(typeof textoOriginal);

// endIndex = 8 => não inclui na fatia
const fatia = textoOriginal.slice(4, 8);

// console.log(textoOriginal);
// console.log(fatia);

const fatia2 = textoOriginal.slice(4);

console.log(textoOriginal);
console.log(fatia2);

