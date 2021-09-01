const nomes = ["André", "João", "Pedro"];

let encontrado = false;
for (let i = 0; i < nomes.length; i++){
    const item = nomes[i];

    if (item === "João") {
        console.log(`João está no índice ${i}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Não encontrado")
}

/*
const nomes = ["José", "Maria", "João", "Pedro"];

for (let i = 0; i < nomes.length; i++){
    const nome = nomes[i];

    if (nome === "João") {
        console.log(nome);
    }
}
*/