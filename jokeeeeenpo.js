function solucao(joao, andre) {
    if (joao == andre) {
        console.log("EMPATE");
    } else {
        if (joao == "PEDRA") {
            if (andre == "PAPEL") {
                console.log("ANDRE");
            }
            if (andre == "TESOURA") {
                console.log("JOAO");
            }
        }
        if (joao == "PAPEL") {
            if (andre == "PEDRA") {
                console.log("JOAO");
            }
            if (andre == "TESOURA") {
                console.log("ANDRE");
            }
        }
        if (joao == "TESOURA") {
            if (andre == "PEDRA") {
                console.log("ANDRE");
            }
            if (andre == "PAPEL") {
                console.log("JOAO");
            }
        }
    }
}