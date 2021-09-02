const formulario = document.querySelector("form");
const inputPesquisa = document.querySelector("#pesquisa");


formulario.addEventListener("submit", function (event) {
    if (!inputPesquisa.value) {
        event.preventDefault();
    }
});