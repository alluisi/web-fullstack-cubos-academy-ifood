const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    imprimirResumo: function() {
        console.log(`Cliente: ${this.nomeDoCliente}`);
    
        let totalQuantidadeDeItens = 0;
        let somaDosPrecosProdutos = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            totalQuantidadeDeItens += this.produtos[i].qtd;
            somaDosPrecosProdutos += this.produtos[i].precoUnit * this.produtos[i].qtd;
        }

        console.log(`Total de itens: ${totalQuantidadeDeItens} ${totalQuantidadeDeItens > 1 ? 'itens' : 'item'}`);

        const precoTotalEmReais = somaDosPrecosProdutos / 100;

        console.log(`Total a pagar: R$ ${precoTotalEmReais},00`);
    }
}

carrinho.imprimirResumo();