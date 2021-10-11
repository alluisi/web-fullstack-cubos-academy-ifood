const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

// DESESTRUTURAÇÃO E REST
const [janeiro, fevereiro, marco, abril, maio, junho, ...outrosMeses] = meses;

console.log(janeiro);
console.log(fevereiro);
console.log(marco);
console.log(abril);
console.log(maio);
console.log(junho);
console.log(outrosMeses);