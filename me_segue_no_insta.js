function solucao(largura, altura) {
    if (altura > largura) {
        console.log("RETRATO");
    } else if (largura > altura) {
        console.log("PAISAGEM");
    } else if (largura == altura) {
        console.log("QUADRADA");
    }
}