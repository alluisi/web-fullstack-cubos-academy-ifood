const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const enderecoEncontrado = (numero) => {
    let retorno = enderecos.find(x => x.cep === numero)
    return retorno.rua
};

console.log(enderecoEncontrado(00222444));