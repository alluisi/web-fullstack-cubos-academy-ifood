const meses = ['janeiro', 'fevereiro', 'março', 'abril'];

// const janeiro = meses[0];
// const fevereiro = meses[1];
// const marco = meses[2];
// const abril = meses[3];

// DESESTRUTURAÇÃO DE ARRAYS
// const [janeiro, fevereiro, marco, abril] = meses;

// SKIP DE ARRAYS

const [janeiro, , , abril] = meses;

console.log(janeiro);
// console.log(fevereiro);
// console.log(marco);
console.log(abril);