function solucao(obj) {
    if (obj.temIngresso == true && (obj.idade >= obj.censura || obj.estaComPais == true)) {
        if (obj.temCarteirinha == true || obj.idade < 18) {
            console.log("MEIA");
        } else {
            console.log("INTEIRA");
        }
    } else {
        console.log("ACESSO NEGADO");
    }
}