let contagem = 10;

function imprimirContagem() {
    if (contagem === 0) {
        console.log(`KABUUUUUUUUUM`);
        clearInterval(intervalId);
    } else {
        console.log(`A bomba explodirá em ${contagem} segundo${contagem === 1 ? "" : "s"}`);
        contagem--
    }
}

imprimirContagem();
const intervalId = setInterval(imprimirContagem, 1000);

/*
setInterval(() => {
    console.log('Passou 1 segundo');
}, 1000);

console.log("Estou processando coisas");
*/