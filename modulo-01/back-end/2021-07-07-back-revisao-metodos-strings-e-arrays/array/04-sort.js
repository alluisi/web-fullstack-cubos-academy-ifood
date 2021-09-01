// SORT = ORDENAR

// ALTERA O ORIGINAL = SIM
// RETORNA O ARRAY ORDENADO = SIM


const numeros = [5, 89, 2, 54, 1, 99, 121];

// const numerosOrdenados = numeros.sort(function (primeiroValor, segundoValor) {
//     if (primeiroValor < segundoValor) {
//         return -1;
//     }
//     else {
//         return 1;
//     }
// });

// console.log(numeros);
// console.log(numerosOrdenados);


// const numerosOrdenados = numeros.sort(function (primeiroValor, segundoValor) {
//     return primeiroValor - segundoValor;
// });


// const numerosOrdenados = numeros.sort((primeiroValor, segundoValor) => {
//     return primeiroValor - segundoValor;
// });

// const numerosOrdenados = numeros.sort((primeiroValor, segundoValor) => primeiroValor - segundoValor);

const numerosOrdenados = numeros.sort((a, b) => a - b);

console.log(numeros);