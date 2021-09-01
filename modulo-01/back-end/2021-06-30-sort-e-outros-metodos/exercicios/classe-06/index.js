const numeros = [0, 122, 4, 6, 7, 8, 44];

const pares = numeros.every(x => x % 2 === 0);

if (pares) {
    console.log("array válido");
} else {
    console.log("array inválido");
};