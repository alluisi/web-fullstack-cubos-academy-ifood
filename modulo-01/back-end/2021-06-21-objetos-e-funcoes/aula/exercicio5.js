let alessandra = {
    nome: "Alessandra",
    idade: 40,
    profissao: "professora",
    altura: 1.69
};

function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 65) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
    } else {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
    }
}

apresentar(alessandra);
