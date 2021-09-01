// Objeto = conjunto de dados e/ou funcionalidades relacionadas
// Geralmente são usados para representar entidades reais: pessoa, aluno, turma, curso, etc.

const pessoa = {
    nome: "Leozinho",
    sobrenome: "Silva",
    idade: 89,
    rg: "39.584.687-9",
    telefone: "(11) 98888-5477"
};

pessoa.nome = "Maria";
pessoa.idade = 35;

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

const pessoa2 = {
    nome: "João",
    sobrenome: "Ferreira",
    idade: 20,
    rg: "39.566.688-9",
    telefone: "(11) 98777-5477"
};

//console.log(pessoa2);
console.log({
    nome: "João",
    sobrenome: "Ferreira",
    idade: 20,
    rg: "39.566.688-9",
    telefone: "(11) 98777-5477"
});
console.log(pessoa2.nome);
console.log(pessoa2.idade);
