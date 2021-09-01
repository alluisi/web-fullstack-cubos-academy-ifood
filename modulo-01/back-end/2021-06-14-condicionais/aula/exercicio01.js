const valorDaCompra = 10000;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
    let valorAPagar = valorDaCompra * 0.9 / 100;
    console.log(`Como o pagamento é a vista, você tem um desconto de 10% e deve pagar apenas ${valorAPagar} reais.`)
} else {
    let valorDaParcela = valorDaCompra / numeroDeParcelas / 100;
    console.log(`Como o pagamento é a prazo, você pagará em ${numeroDeParcelas}x de ${valorDaParcela.toFixed(2)} reais, totalizando ${valorDaCompra / 100} reais.`)
}