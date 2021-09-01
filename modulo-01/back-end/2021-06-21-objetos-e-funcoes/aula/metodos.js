let alessandra = {
    nome: "Alessandra",
    idade: 40,
    profissao: "professora",
    altura: 1.69,
    obterFaixaEtaria: function () {
        if (this.idade < 25) {
            return "jovem";
        } else if (this.idade < 65) {
            return "adulto(a)";
        } else {
            return "idoso(a)";
        }
    },
    apresentar: function () {
        const faixaEtaria = this.obterFaixaEtaria(this.idade);
        console.log(`Olá! Meu nome é ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}.`);
    }
};

console.log(alessandra.obterFaixaEtaria());
alessandra.apresentar();
