//valor do produto comprado.
const valorDoProduto = 1_000_00;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300_00;

let valorDaParcela = valorDoProduto / quantidadeDoParcelamento;
let quantidadeParcelasPagas = valorPago / valorDaParcela;
let parcelasRestantes = quantidadeDoParcelamento - quantidadeParcelasPagas;

console.log(`Restam ${parcelasRestantes} parcelas de R$${valorDaParcela / 100}`);
