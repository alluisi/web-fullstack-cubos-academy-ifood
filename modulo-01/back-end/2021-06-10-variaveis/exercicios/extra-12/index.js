let capital = 60_000, tempo = 24, montante = 90_000, taxa = 0, taxaAoMes = 0;

taxa = Math.pow((montante / capital), (1 / tempo)) - 1;
taxaAoMes = taxa * 100;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de jutos de ${taxaAoMes}%, pois após ${tempo} meses você teve que pagar ${montante} reais.`);