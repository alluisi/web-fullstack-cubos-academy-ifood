/*
    Propósito: Substituir pedaço da string por outro pedaço
    Retorno: array
    Parâmetro: subStr a ser substituido, newStr (nova string)
    Altera o objeto original: Nãooooo
    Retorna a alteração: Sim
*/

// stringOriginal.replace(stringASerSubstituida, stringNova);

const fruta = "banana";

const legume = fruta.replace('nana', 'tata');

// console.log(fruta);
// console.log(legume);

const tuberculo = fruta.replace('nana', 'tata que nasce embaixo da terra');

// console.log(fruta);
// console.log(tuberculo);

const tuberculoNoDiminutivo = legume.replace('tata', 'tatinha');

console.log(legume);
console.log(tuberculoNoDiminutivo);