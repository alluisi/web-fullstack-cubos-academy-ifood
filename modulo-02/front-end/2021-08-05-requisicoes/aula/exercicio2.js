const pokemon = document.querySelector("#poke");
const nome = document.querySelector(".nome");
const img = document.querySelector(".img");

pokemon.addEventListener("change", function () {
    const promiseResposta = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`);

    promiseResposta.then(function (resposta) {
        if (!resposta.ok) {
            console.log("ERRO");
            return;
        }

        const promiseBody = resposta.json();

        promiseBody.then(function (body) {
            nome.textContent = body.name;
            img.src = body.sprites.front_default;
            img.alt = body.name;
        });
    });
});