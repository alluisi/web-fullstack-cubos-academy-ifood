const olhoFechado = document.querySelector(".fechado");
const olhoAberto = document.querySelector(".aberto");
const senhaOculta = document.querySelector(".senha-oculta")
const senhaVisivel = document.querySelector(".senha-visivel")


olhoFechado.addEventListener("click", function () {
    senhaOculta.classList.add("escondido");
    senhaVisivel.classList.remove("escondido");
});

olhoAberto.addEventListener("click", function () {
    senhaVisivel.classList.add("escondido");
    senhaOculta.classList.remove("escondido");
});