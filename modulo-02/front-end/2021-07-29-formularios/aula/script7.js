const letras = "abcdefghijklmnopqrstuvwxyz".split("");
const numeros = "0123456789".split("");

const inputDeSenha = document.querySelector("#senha");

inputDeSenha.addEventListener("change", function () {
    const senha = inputDeSenha.value;
    let temLetra = false;
    let temNumero = false;

    for (let i = 0; i < senha.length; i++) {
        if (letras.includes(senha[i])) {
            temLetra = true;
            continue;
        }

        if (numeros.includes(senha[i])) {
            temNumero = true;
            continue;
        }
    }

    if (temLetra && temNumero) {
        console.log("Senha válida");
    }
});