const original = "1,350,000";
// const resultado = original.replace(",", ".").replace(",", ".");
let resultado = original
let resultadoAnterior = "";

while (resultado !== resultadoAnterior) {
    resultadoAnterior = resultado;
    resultado = resultado.replace(",", ".");
}

console.log(resultado);