// REDUZ o ARRAY A UM VALOR
// TRANSOFORMA O ARRAY EM 1 VALOR

const numeros = [1, 2, 3, 4, 5];

// const valorArrayReduzido = numeros.reduce(
//     (acumulador, valorAtual) => acumulador + valorAtual
//     , 0 // default = valor do primeiro item
// );

// console.log(valorArrayReduzido);

const numerosComoTexto = ['1', '2', '3', '4', '5'];

// const valorArrayReduzido2 = numerosComoTexto.reduce(
//     (acumulador, valorAtual) => acumulador + valorAtual
//     , '' // default = valor do primeiro item
// );

// console.log(valorArrayReduzido2);


const numeros2 = [1, 2, 3, 4, 5];

const valorArrayReduzido = numeros2.reduce(
    (nome1, nome2) => nome1 + nome2
    , 0 // default = valor do primeiro item
);

console.log(valorArrayReduzido);