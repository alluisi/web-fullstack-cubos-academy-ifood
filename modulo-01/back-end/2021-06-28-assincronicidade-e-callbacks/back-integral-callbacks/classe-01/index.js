const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const nomesMenores = cidades.filter(x => x.length <= 8);

console.log(nomesMenores.join(", "));