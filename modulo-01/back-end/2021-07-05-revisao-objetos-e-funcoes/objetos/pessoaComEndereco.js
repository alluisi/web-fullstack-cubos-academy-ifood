const pessoaComEndereco = {
    nome: "João",
    sobrenome: "Ferreira",
    idade: 20,
    rg: "39.566.688-9",
    endereco: {
        logradouro: "Av. Paulista",
        numero: 1000,
        complemento: "Apto. 11"
    }
};

console.log(pessoaComEndereco);
console.log(pessoaComEndereco.endereco);
console.log(pessoaComEndereco.endereco.logradouro);

pessoaComEndereco.telefone = "(11) 98777-5477";
console.log(pessoaComEndereco);

pessoaComEndereco.endereco.bairro = "Cerqueira César";
console.log(pessoaComEndereco);