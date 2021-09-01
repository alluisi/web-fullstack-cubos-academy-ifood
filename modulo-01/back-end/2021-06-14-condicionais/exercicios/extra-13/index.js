//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    let valorAPagar = valorDoProduto * 0.95 / 100;
    console.log(`Valor a ser pago: ${valorAPagar.toFixed(2)}`);
} else if (tipoDePagamento === "cheque") {
    let valorAPagar = valorDoProduto * 0.97 / 100;
    console.log(`Valor a ser pago: ${valorAPagar.toFixed(2)}`);
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    let valorAPagar = valorDoProduto * 0.9 / 100;
    console.log(`Valor a ser pago: ${valorAPagar.toFixed(2)}`);
}