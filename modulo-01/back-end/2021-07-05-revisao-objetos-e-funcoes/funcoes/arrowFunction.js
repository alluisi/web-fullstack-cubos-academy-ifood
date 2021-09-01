const bomDia = () => {
    console.log('Bom dia!');
}

// bomDia();


const soma = (operando1, operando2) => {
    return operando1 + operando2;
}

// console.log(soma(15, 5));


const somaSemChaves = (operando1, operando2) => operando1 + operando2;

//console.log(somaSemChaves(15, 5));


const somaEIgualADois = (operando1, operando2) => operando1 + operando2 === 2;

console.log(somaEIgualADois(1,1));
console.log(somaEIgualADois(1,9));