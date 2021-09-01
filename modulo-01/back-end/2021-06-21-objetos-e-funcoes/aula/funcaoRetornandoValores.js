function verificarMaioridade(nome, idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let nome2 = "Alessandra";
let idade2 = 40;

let ehMaiorDeIdade = verificarMaioridade(nome2, idade2);

console.log(ehMaiorDeIdade);