// objeto carrinho de exemplo do enunciado do exercício
// com alterações das letras anteriores
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
        let qtdTotalItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();

        let totalAPagarTexto = `${totalAPagar / 100}`;
        totalAPagarTexto = totalAPagarTexto.replace(".", ",");
        if (totalAPagarTexto.indexOf(",") === -1) {
            totalAPagarTexto = `${totalAPagarTexto},00`;
        }
    
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${totalAPagarTexto}`);
    },

    addProduto: function(produto) {
        let indiceProdutoExistente = -1;
    
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                indiceProdutoExistente = i;
                break;
            }
        }
    
        if (indiceProdutoExistente === -1) {
            this.produtos.push(produto);
        } else {
            this.produtos[indiceProdutoExistente].qtd += produto.qtd;
        }
    },

    imprimirDetalhes: function() {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log("");

        let qtdTotalItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();

        for (let i = 0; i < this.produtos.length; i++) {
            let produto = this.produtos[i];

            let precoPorProduto = produto.qtd * produto.precoUnit / 100;

            let precoPorProdutoTexto = `${precoPorProduto}`;
            precoPorProdutoTexto = precoPorProdutoTexto.replace(".", ",");
            if (precoPorProdutoTexto.indexOf(",") === -1) {
                precoPorProdutoTexto = `${precoPorProdutoTexto},00`;
            }

            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${precoPorProdutoTexto}`)
        }

        console.log("");

        let totalAPagarTexto = `${totalAPagar / 100}`;
        totalAPagarTexto = totalAPagarTexto.replace(".", ",");
        if (totalAPagarTexto.indexOf(",") === -1) {
            totalAPagarTexto = `${totalAPagarTexto},00`;
        }

        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${totalAPagarTexto}`);
    },

    calcularTotalDeItens: function () {
        let qtdTotalDeItens = 0;
        for (let produto of this.produtos) {
            qtdTotalDeItens += produto.qtd;
        }
        return qtdTotalDeItens;
    },

    calcularTotalAPagar: function() {
        let totalAPagar = 0;
        for (let produto of this.produtos) {
            totalAPagar += produto.qtd * produto.precoUnit;
        }
        return totalAPagar;
    },

    // método calcularDesconto
    calcularDesconto: function() {
        // variáveis para guardar os retornos dos métodos
        // calcularTotalDeItens e calcularTotalAPagar
        let qtdTotalDeItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();

        // variáveis para guardar os cálculos de desconto
        // por cada uma das duas regras
        let descontoPorItens = 0;
        let descontoPorTotal = 0;

        // lógica para calcular o desconto pela regra de
        // quantidade de itens (se qtd de itens maior que 4)
        // onde o desconto será o valor do produto mais barato
        if (qtdTotalDeItens > 4) {
            // guarda preço do primeiro produto
            descontoPorItens = this.produtos[0].precoUnit;
            // percorre array de produtos procurando produto mais barato
            for (let i = 1; i < this.produtos.length; i ++) {
                // se item atual do loop é mais barato do que o valor em descontoPorItens
                if (this.produtos[i].precoUnit < descontoPorItens) {
                    // guarda valor do mais barato
                    descontoPorItens = this.produtos[i].precoUnit;
                }
            }
        }

        // lógica para desconto percentual sobre valor total
        // (se totalAPagar é maior que 100)
        if (totalAPagar > 100) {
            // descontoPorTotal será 10% (valor dividido por 10)
            descontoPorTotal = totalAPagar / 10;
        }

        // retorna o maior valor de desconto (mais vantajoso) entre os
        // dois descontos calculados, utilizando o operador ternário para
        // a decisão
        return descontoPorItens > descontoPorTotal ? descontoPorItens : descontoPorTotal;
    }
}

// abaixo realizaremos o teste do calcularDesconto para os itens / produtos
// do carrinho original

// executa calcularDesconto e guarda na variável descontoEmCentavos

let descontoEmCentavos = carrinho.calcularDesconto();

// formata valor do desconto em texto
let descontoEmReaisTexto = `${descontoEmCentavos / 100}`;
descontoEmReaisTexto = descontoEmReaisTexto.replace(".", ",");
if (descontoEmReaisTexto.indexOf(",") === -1) {
    descontoEmReaisTexto = `R$ ${descontoEmReaisTexto},00`;
}

// imprime o valor do desconto
console.log(`Desconto para o carrinho da letra b): ${descontoEmReaisTexto}`);

// -------------------------------------------------------- //

// abaixo serão adicionados os itens / produtos que foram adicionados
// na letra e)

// adiciona os produtos
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProduto(novaBermuda);
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis);

// executa calcularDesconto e guarda na variável descontoEmCentavos
descontoEmCentavos = carrinho.calcularDesconto();

// formata valor do desconto em texto
descontoEmReaisTexto = `${descontoEmCentavos / 100}`;
descontoEmReaisTexto = descontoEmReaisTexto.replace(".", ",");
if (descontoEmReaisTexto.indexOf(",") === -1) {
    descontoEmReaisTexto = `R$ ${descontoEmReaisTexto},00`;
}

// imprime o valor do desconto
console.log(`Desconto para o carrinho da letra e): ${descontoEmReaisTexto}`);