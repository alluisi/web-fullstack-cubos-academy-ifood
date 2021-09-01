const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function inverterAlterar(lista) {
    let invertida = lista.reverse();
    console.log(invertida.join(", "));

    let alterada = invertida.reverse()
    alterada.shift();
    alterada.pop();
    alterada.push("Melão");
    console.log(alterada);
}

inverterAlterar(frutas);