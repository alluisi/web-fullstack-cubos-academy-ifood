let alessandra = {
    nome: "Alessandra",
    idade: 40,
    profissao: "professora",
    altura: 1.69
};

function obterFaixaEtaria(idade) {
    if (idade < 25) {
        return "jovem";
    } else if (idade < 65) {
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}

function apresentar(pessoa) {
    const faixaEtaria = obterFaixaEtaria(pessoa.idade);
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
}

apresentar(alessandra);
