function solucao(produtos) {
    let faturamento = {
        totalTop: 0,
        percentual: 0
    };
    let top = 0;
    let geral = 0;
    
    for (let item of produtos) {
        geral += item.preco;
        if (item.preco > 10000) {
            top += item.preco;
        }
    }
    faturamento.totalTop = top;
    faturamento.percentual = top / geral;
    
    console.log(faturamento);
}