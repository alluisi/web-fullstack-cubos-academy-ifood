const primeiroSemestreIncompleto = ['março', 'abril', 'maio', 'junho'];
const segundoSemestreIncompleto = ['julho', 'agosto', 'setembro', 'outubro'];

// DESESTRUTURAÇÃO E SPREAD
const mesesDoAno = ['janeiro', 'fevereiro', ...primeiroSemestreIncompleto, ...segundoSemestreIncompleto, 'novembro', 'dezembro'];

console.log(mesesDoAno);