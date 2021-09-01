const comentario1 = "Esse COVID é muito perigoso!";
const comentario2 = "Estamos em uma pandemia!";
const comentario3 = "Hoje eu tomei a vacina.";

function detectarPalavras(frase) {
    let maiusculas = frase.toUpperCase();
    if (maiusculas.includes("PANDEMIA") || frase.includes("COVID")) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}

detectarPalavras(comentario1);
detectarPalavras(comentario2);
detectarPalavras(comentario3);