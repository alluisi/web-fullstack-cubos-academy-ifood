const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function acharLivro(estante, nome) {
    let posicao = estante.indexOf(nome) + 1;
    console.log(posicao);
}
acharLivro(livros, nomeDoLivro);