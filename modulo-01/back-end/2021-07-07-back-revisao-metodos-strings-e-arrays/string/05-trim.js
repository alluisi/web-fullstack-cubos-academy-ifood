/*
    Propósito: Remove espaços em branco do começo e/ou fim de uma string
    Retorno: string
    Parâmetro: N/A
    Altera o objeto original: Nãooooo
    Retorna a alteração: Sim
*/

let textoComEspacos = '   <Leo>';

// console.log(textoComEspacos.trim());

textoComEspacos = '   Leo       ';

// console.log(`<${textoComEspacos.trim()}>`);

textoComEspacos = 'Leo       ';

// console.log(`<${textoComEspacos.trim()}>`);

textoComEspacos = '     Leo muito legal';

console.log(`<${textoComEspacos.trim()}>`);