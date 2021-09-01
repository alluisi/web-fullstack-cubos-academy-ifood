const nome = 'Guido Cerqueira';

const nickname = nome.trim().toLocaleLowerCase().slice(0, 13).split(" ").join("");

console.log(`@${nickname}`);