function imprimirDeTrasPraFrente(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    let resultadoFinal = "";

    for (let letra of arrayDeLetras) {
        resultadoFinal += letra;
    }
    console.log(resultadoFinal);
}

imprimirDeTrasPraFrente("Cubos Academy");