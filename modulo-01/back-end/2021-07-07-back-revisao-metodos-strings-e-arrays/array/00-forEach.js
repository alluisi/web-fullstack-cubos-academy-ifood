// FOR EACH
// PARA CADA

// Propósito : loop no array

const numeros = [1, 3, 4, 5, 7, 9, 248, 88, 999];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// let i = 0;
// numeros.forEach(function () {
//     console.log(numeros[i]);
//     i++;
// });

// numeros.forEach(function (currentValue, index) {
//     console.log(`${numeros[index].toString().padStart(3, '0')}`);
// });

const numeros2 = [7, 8, 9];

// let soma = 0;
// numeros2.forEach(function (currentValue) {
//     soma += currentValue;
// });
// console.log(soma);


numeros2.forEach(function (valorDoItem, indice) {
    console.log(numeros2[indice]);
    console.log(valorDoItem);
});