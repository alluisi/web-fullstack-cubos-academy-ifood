const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
const rodada = 10000;
let controle = 0;

const exibirNome = () => {
    if (controle === jogadores.length) {
        console.log("A rodada terminou!");
        clearInterval(intervalId);
    } else {
        console.log(jogadores[controle])
        controle++
    }
}

exibirNome()
const intervalId = setInterval(exibirNome, rodada / jogadores.length);