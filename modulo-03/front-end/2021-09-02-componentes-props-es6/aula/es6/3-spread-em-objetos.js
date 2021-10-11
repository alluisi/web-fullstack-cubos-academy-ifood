const pessoa = { nome: 'Alessandra', cpf: '12345678901', idade: 40 };

// const novaPessoa = {
//     nome: pessoa.nome,
//     cpf: pessoa.cpf,
//     idade: 20
// }
// console.log(novaPessoa);

// SPREAD OPERATOR
const novaPessoa = {
    ...pessoa,
    idade: 20
}
console.log(novaPessoa);