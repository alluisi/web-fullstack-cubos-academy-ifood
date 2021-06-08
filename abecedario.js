function solucao(letra, palavras) {
    
    let quantidade = 0;
    let letrasIniciais = "";
    
    for (let i = 0; i < palavras.length; i++) {
        letrasIniciais = palavras[i];
        if (letrasIniciais[0] != letra) {
            quantidade++;
        }
    }
    
    console.log(quantidade);
}