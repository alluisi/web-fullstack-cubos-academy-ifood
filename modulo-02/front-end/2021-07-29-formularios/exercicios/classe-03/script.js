const formulario = document.querySelector("form");
const inputMusica = document.querySelector("#musica");
const select = document.querySelector("select");
const pesquisa = document.querySelector(".escondido");


formulario.addEventListener("submit", function (event) {
    if (!inputMusica.value) {
        event.preventDefault();
    }
});

select.addEventListener("change", function () {
    pesquisa.classList.remove("escondido");

    if (select.value === "mpb") {
        inputMusica.value = "Carinhoso - Pixinguinha";
    } else if (select.value === "pop") {
        inputMusica.value = "Rain on Me - Lady Gaga e Ariana Grande";
    } else if (select.value === "rock") {
        inputMusica.value = "Back In Black - AC/DC";
    }
});
