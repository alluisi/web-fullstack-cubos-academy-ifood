const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

// a) numeros.sort((a, b) => a - b);
// b) numeros.sort((a, b) => b - a);
// c) numeros.sort();

// console.log(numeros);

// d) frutas.sort((a, b) => a.localeCompare(b));
// e) frutas.sort((a, b) => b.localeCompare(a));

frutas.sort((a, b) => a.length - b.length);

console.log(frutas);