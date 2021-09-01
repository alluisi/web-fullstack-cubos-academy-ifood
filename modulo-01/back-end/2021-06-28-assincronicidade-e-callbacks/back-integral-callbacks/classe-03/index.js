const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const correcao = frutas.map((x) => {
    let indice = frutas.indexOf(x);
    return `${indice} - ${x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()}`
});
console.log(correcao);