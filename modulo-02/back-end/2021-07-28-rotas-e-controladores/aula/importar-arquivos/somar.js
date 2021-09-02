function calculaSoma(lista) {
    let soma = 0;
    for (const elemento of lista) {
        soma += elemento;
    }
    return soma;
};

// console.log(calculaSoma([1, 2, 3]));

module.exports = { calculaSoma, outroValor: "oi" };