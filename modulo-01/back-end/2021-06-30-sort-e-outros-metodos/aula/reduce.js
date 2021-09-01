const array = [0, 1, 2, 3, 4, 5];

const somaTotal = array.reduce((acumulador, itemAtual) => acumulador + itemAtual);

/*
let somaTotal = array[0];
for (let i = 1; i < array.length; i++) {
    let item = array[i];
    somaTotal += item;
};
*/

console.log(somaTotal);