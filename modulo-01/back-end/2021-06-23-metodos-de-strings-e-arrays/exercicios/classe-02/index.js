const cpf1 = "12309";
const cpf2 = "12345678900";
const cnpj1 = "12345678900";
const cnpj2 = "12345678000199";

function validarCPF(numero) {
    if (numero.length === 11) {
        console.log(`${numero.substr(0, 3)}.${numero.substr(3, 3)}.${numero.substr(6, 3)}-${numero.substr(9)}`);
    } else {
        console.log("CPF Inválido");
    }
}

function validarCNPJ(numero) {
    if (numero.length === 14) {
        console.log(`${numero.substr(0, 2)}.${numero.substr(2, 3)}.${numero.substr(5, 3)}/${numero.substr(8, 4)}-${numero.substr(12)}`);
    } else {
        console.log("CNPJ Inválido");
    }
}

validarCPF(cpf1);
validarCPF(cpf2);
validarCNPJ(cnpj1);
validarCNPJ(cnpj2);