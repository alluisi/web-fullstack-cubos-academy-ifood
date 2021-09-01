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
    calcularTotalDeItens: function () {
        let quantidadeTotal = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            let quantidadeUnitaria = this.produtos[i].qtd;
            quantidadeTotal = quantidadeTotal + quantidadeUnitaria;
        } return quantidadeTotal;
    },
    calcularTotalAPagar: function () {
        let valorFinal = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            let valorPorProduto = this.produtos[i].precoUnit * this.produtos[i].qtd;
            valorFinal = valorFinal + valorPorProduto;
        }
        valorFinal = valorFinal / 100;
        return valorFinal.toFixed(2);
    },
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total: R$ ${this.calcularTotalAPagar()}`);
        console.log(`Desconto: R$ ${this.calcularDesconto()}`);
        let valorComDesconto = 0;
        valorComDesconto = this.calcularTotalAPagar() - this.calcularDesconto();
        console.log(`Total a pagar: R$ ${valorComDesconto.toFixed(2)}`);
    },
    addProduto: function (produto) {
        let controle = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                this.produtos[i].qtd = this.produtos[i].qtd + produto.qtd;
                controle++;
            }
        }

        if (controle === 0) {
            this.produtos.push(produto);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);

        for (let i = 0; i < this.produtos.length; i++) {
            let valorPorProduto = this.produtos[i].precoUnit * this.produtos[i].qtd;

            let = valorPorProdutoReal = valorPorProduto / 100;

            console.log(`Item ${this.produtos[i].id} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${valorPorProdutoReal.toFixed(2)}`);
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total: R$ ${this.calcularTotalAPagar()}`);
        console.log(`Desconto: R$ ${this.calcularDesconto()}`);
        let valorComDesconto = 0;
        valorComDesconto = this.calcularTotalAPagar() - this.calcularDesconto();
        console.log(`Total a pagar: R$ ${valorComDesconto.toFixed(2)}`);
    },
    calcularDesconto: function () {
        let desconto = 0;
        let descontoPorItens = 0;
        let descontoPorValor = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.calcularTotalDeItens() >= 4) {
                let itemMaisBarato = 0;
                itemMaisBarato = this.produtos[i].precoUnit
                for (let i = 0; i < this.produtos.length; i++) {
                    if (itemMaisBarato > this.produtos[i].precoUnit) {
                        itemMaisBarato = this.produtos[i].precoUnit;
                    }
                }
                descontoPorItens = itemMaisBarato / 100;
            }
        }
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.calcularTotalAPagar() > 100.00) {
                descontoPorValor = this.calcularTotalAPagar() * 0.1;
            }
        }
        if (descontoPorItens >= descontoPorValor) {
            desconto = descontoPorItens;
        } else {
            desconto = descontoPorValor;
        }
        return desconto.toFixed(2);
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);

carrinho.imprimirResumo();
carrinho.imprimirDetalhes();