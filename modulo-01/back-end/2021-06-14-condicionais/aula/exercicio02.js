const valorDaCompra = 10000;
const numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {
    let valorAPagar = valorDaCompra * 0.9 / 100;
    console.log(`Como o pagamento é a vista, você tem um desconto de 10% e deve pagar apenas ${valorAPagar} reais.`)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas < 7) {
    let valorDaParcela = valorDaCompra / numeroDeParcelas / 100;
    console.log(`Como o pagamento é a prazo, você pagará em ${numeroDeParcelas}x de ${valorDaParcela.toFixed(2)} reais, totalizando ${valorDaCompra / 100} reais.`)
} else if (numeroDeParcelas <= 12) {
    const valorComJuros = valorDaCompra * Math.pow((1 + 0.01), numeroDeParcelas);
    let valorDaParcela = (valorComJuros / numeroDeParcelas / 100).toFixed(2);
    console.log(`Como o pagamento é a prazo, você pagará em ${numeroDeParcelas}x de ${valorDaParcela} reais, totalizando ${(valorComJuros / 100).toFixed(2)} reais.`)
} else {
    console.log(`Não é possível dividir por mais de 12 parcelas.`)
}