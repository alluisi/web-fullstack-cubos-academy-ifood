const pessoas = [
    {
        nome: "Jr",
        idade: 30
    },
    {
        nome: "adriana",
        idade: 18
    },
    {
        nome: "André",
        idade: 30
    },
    {
        nome: "Carvalho",
        idade: 16
    },
    {
        nome: "Cláudio",
        idade: 30
    }
];

pessoas.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1;
    } else if (b.idade < a.idade) {
        return 1;
    } else {
        return a.nome.localeCompare(b.nome);
    }
});

console.log(pessoas);