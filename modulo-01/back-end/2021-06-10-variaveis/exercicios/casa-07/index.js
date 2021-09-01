let populacaoInicial = 1000, transmissao = 4, tempo = 100, pessoasInfectadas = 0;

pessoasInfectadas = populacaoInicial * Math.pow(transmissao, (tempo / 7));

console.log(pessoasInfectadas);