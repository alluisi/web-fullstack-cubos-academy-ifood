function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 60) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
    } else {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
    }
}

let alessandra = {
    nome: "Alessandra",
    idade: 40,
    profissao: "professora",
    altura: 1.69
};

apresentar(alessandra);

let aline = {
    nome: "Aline",
    idade: 30,
    profissao: "programadora",
    altura: 1.71
};

apresentar(aline);

let jose = {
    nome: "José",
    idade: 30,
    profissao: "professor",
    altura: 1.72
};

apresentar(jose);