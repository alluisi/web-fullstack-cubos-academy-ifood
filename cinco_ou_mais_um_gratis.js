function solucao(precos) {
    
    let valorSemDesconto = 0;
    let produtoMaisBarato = 0;
    let valorASerPago = 0;
    
    produtoMaisBarato = precos[0];
    
    for (let i = 0; i < precos.length; i++) {
        valorSemDesconto += precos[i];
        if (precos[i] < produtoMaisBarato) {
            produtoMaisBarato = precos[i];
        }
    }
    
    if (precos.length >= 5) {
        valorASerPago = valorSemDesconto - produtoMaisBarato;
    } else {
        valorASerPago = valorSemDesconto;
    }
    
    console.log(valorASerPago);     
}