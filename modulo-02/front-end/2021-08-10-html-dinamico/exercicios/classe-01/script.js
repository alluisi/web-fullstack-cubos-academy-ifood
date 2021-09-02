const input = document.querySelector(".busca");
const paises = document.querySelector(".paises");

fetch("https://restcountries.eu/rest/v2/all").then(function (resposta) {
    const pormiseBody = resposta.json();

    pormiseBody.then(function (body) {
        body.forEach(function (pais) {
            const div = document.createElement("div");
            div.classList.add("pais");

            const nome = document.createElement("h2");
            nome.textContent = pais.name;

            const regiao = document.createElement("span");
            regiao.textContent = pais.region;

            const capital = document.createElement("span");
            capital.textContent = pais.capital;

            const populacao = document.createElement("p");
            populacao.textContent = pais.population;

            const bandeira = document.createElement("img");
            bandeira.src = pais.flag;

            div.append(nome, regiao, capital, populacao, bandeira);
            paises.append(div);
        });
    });
});

input.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" || input.value === "") {
        return;
    } else {
        const paises = document.querySelectorAll(".pais");
        for (let pais of paises) {
            const nome = pais.querySelector("h2");
            if (input.value !== nome.textContent) {
                pais.style.display = "none";
            };
        };
    };
});