function imprimirDeTrasPraFrente(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    console.log(arrayDeLetras.join(""));
}

imprimirDeTrasPraFrente("Cubos Academy");