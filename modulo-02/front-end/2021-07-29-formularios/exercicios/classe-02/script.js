const form = document.querySelector("form");
const inputSenha = document.querySelector("#senha");
const inputConfirmacao = document.querySelector("#confirmacao");

form.addEventListener("submit", function (event) {
    if (inputSenha.value !== inputConfirmacao.value) {
        event.preventDefault()
    }
});