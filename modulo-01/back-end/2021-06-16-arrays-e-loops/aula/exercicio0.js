const paises = ["Brasil", "Itália", "Japão", "Angola", "Austrália"];

paises.push("México");
console.log(paises);

paises.pop();
console.log(paises);

paises.unshift("México");
console.log(paises);

paises.shift();
console.log(paises);

console.log(paises[paises.length - 1]);
console.log(paises[1]);
console.log(paises[2]);