const botao = document.querySelector(".imagem");
const aviso = document.querySelector(".faq");

botao.addEventListener("click", function () {
    if (aviso.classList.contains("escondido")) {
        aviso.classList.remove("escondido");
    } else {
        aviso.classList.add("escondido");
    };

});
