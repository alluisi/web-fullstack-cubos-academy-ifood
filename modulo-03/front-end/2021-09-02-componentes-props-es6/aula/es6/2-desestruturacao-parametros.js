const pessoa = { nome: 'Alessandra', idade: 40 };

// function logarPessoa(pessoaLogada) {
//     console.log(pessoaLogada.nome);
//     console.log(pessoaLogada.idade);
// }
// logarPessoa(pessoa);


// DESESTRUTURAÇÃO DE PARÂMETROS

function logarPessoa({ nome: nomeDaPessoa, idade }) {
    console.log(nomeDaPessoa);
    console.log(idade);
}
logarPessoa(pessoa);