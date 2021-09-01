const numeros = [4, 2, 10, 5, 3, 23, 1];

numeros.sort((a, b) => a - b);

/*
numeros.sort((a, b) => {
    if (a < b) {
        return -1; // - a vem primeir (menor)
    } else if (a > b) {
        return 1; // + b vem primeir (maior)
    } else {
        return 0;
    }
});
*/

// numeros.sort();

console.log(numeros);