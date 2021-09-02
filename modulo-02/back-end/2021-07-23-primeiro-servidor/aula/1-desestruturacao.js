const pessoa = {
    nome: 'Alessandra',
    idade: 40,
    cidade: 'São Carlos',
    profissão: 'Desenvolvedora'
};

// const nome = pessoa.nome;
// const idade = pessoa.idade;

// Desestruturação - Destructuring

const { nome: nomeDaPessoa, idade, ...outras } = pessoa;

console.log(nomeDaPessoa);
console.log(idade);
console.log(outras);
console.log(pessoa);