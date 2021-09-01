const cpf = "011.022.033-44";

function removerPontuacao(numero) {
    console.log(numero.replace("-", "").split(".").join(""));
};

removerPontuacao(cpf);