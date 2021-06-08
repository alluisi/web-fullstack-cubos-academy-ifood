function solucao(ano) {
    
    let calculo = ano - 2014;
    let resto = calculo % 4;
    if (resto == 0) {
        console.log("COPA");
    } else if (resto == 2) {
        console.log("JOGOS");
    } else {
        console.log("MEH");
    }
}