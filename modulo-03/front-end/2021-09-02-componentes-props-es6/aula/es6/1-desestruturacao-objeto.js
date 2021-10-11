const pessoa = { nome: 'Alessandra', idade: 40 };

// const nomeDaPessoa = pessoa.nome;
// const idadeDaPessoa = pessoa.idade;

// console.log(nomeDaPessoa);
// console.log(idadeDaPessoa);

// DESESTRUTURAÇÃO DE OBJETOS

const { nome: nomeDaPessoa, idade } = pessoa;

console.log(nomeDaPessoa);
console.log(idade);