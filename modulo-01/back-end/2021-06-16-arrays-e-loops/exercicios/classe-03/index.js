// const numeros = [54, 22, 14, 87, 284];
const numeros = [54, 22, 14, 10, 284];
let indice = null;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        indice = i;
        console.log(indice);
    }
}

if (indice === null) {
    console.log(-1);
}