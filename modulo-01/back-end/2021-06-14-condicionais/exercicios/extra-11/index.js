//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 1_500_00;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10_000_00;

if (rendaMensalEmCentavos < 2_000_00) {
    console.log(`Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais`);
} else if (mesesDecorridos > 60) {
    console.log(`Nenhum valor é devido pois já se passaram mais de 60 meses`);
} else if (totalJaPagoPeloAluno >= 18_000_00) {
    console.log(`Nenhum valor é devido pois você já quitou sua dívida de R$ 18000 reais`);
} else {
    let valorParcela = rendaMensalEmCentavos * 0.18 / 100;
    console.log(`O valor da parcela desse mês é R$ ${valorParcela} reais`)
}